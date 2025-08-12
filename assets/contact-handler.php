<?php
require 'vendor/autoload.php';
use \Mailjet\Resources;

$env = parse_ini_file('../../.env');

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: https://dakreiniginglm.be");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'errors' => ['global' => 'Invalid request method']]);
    exit;
}

// Function to sanitize input
function sanitize($data) {
    return htmlspecialchars(trim($data), ENT_QUOTES, 'UTF-8');
}

if (!empty($_POST['website'])) {
    http_response_code(403);
    echo json_encode(['success' => false, 'errors' => ['global' => 'Bot detected.']]);
    exit;
}

$naam = sanitize($_POST['naam'] ?? '');
$email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
$dienst = sanitize($_POST['dienst'] ?? '');
$onderwerp = sanitize($_POST['onderwerp'] ?? '');
$recaptchaToken = $_POST['recaptcha_token'] ?? ''; // Token from frontend

$errors = [];

// reCAPTCHA v3 verification
$recaptchaSecret = $env['RECAPTCHA_SECRET_KEY'];  // From .env file
$recaptchaResponse = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$recaptchaSecret&response=$recaptchaToken");
$recaptchaData = json_decode($recaptchaResponse, true);

if ($recaptchaData['success'] !== true || $recaptchaData['score'] < 0.65) {
    $errors['recaptcha'] = 'reCAPTCHA validation failed. Please try again.';
}

if (!$naam) $errors['naam'] = 'Naam is verplicht.';
if (!$email) $errors['email'] = 'Voer een geldig e-mailadres in.';
if (!$dienst) $errors['dienst'] = 'Selecteer een dienst.';
if (!$onderwerp) $errors['onderwerp'] = 'Geef een beschrijving van uw aanvraag.';

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'errors' => $errors]);
    exit;
}

// Function to load template and replace placeholders
function loadTemplate($file, $data) {
    $template = file_get_contents($file);
    foreach ($data as $key => $value) {
        $template = str_replace("{{" . $key . "}}", $value, $template);
    }
    return $template;
}

// Prepare the dynamic content for the templates
$data = [
    'naam' => $naam,
    'email' => $email,
    'dienst' => $dienst,
    'onderwerp' => $onderwerp
];

// Load the templates
$adminTemplate = loadTemplate('templates/admin_template.html', $data);
$userTemplate = loadTemplate('templates/user_template.html', $data);

// Send email using Mailjet API
$mj = new \Mailjet\Client($env['MAILJET_API_KEY'], $env['MAILJET_API_SECRET'], true, ['version' => 'v3.1']);

$body = [
  'Messages' => [
    [
      'From' => [
        'Email' => "info@dakreiniginglm.be",
        'Name' => "Dakreiniging LM"
      ],
      'To' => [
        ['Email' => "info@dakreiniginglm.be", 'Name' => "Admin"]
      ],
      'Subject' => "Nieuw contactformulier bericht van {$naam}",
      'HTMLPart' => $adminTemplate,
      'CustomID' => "ContactFormAdmin"
    ],
    [
      'From' => [
        'Email' => "info@dakreiniginglm.be",
        'Name' => "Dakreiniging LM"
      ],
      'To' => [
        ['Email' => $email, 'Name' => $naam]
      ],
      'Subject' => "Bevestiging van je aanvraag bij Dakreiniging LM",
      'HTMLPart' => $userTemplate,
      'CustomID' => "ContactFormUser"
    ],
  ]
];

$response = $mj->post(Resources::$Email, ['body' => $body]);

if ($response->success()) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Bedankt! Je aanvraag is verzonden.']);
} else {
    http_response_code(500);
    echo json_encode([ 
        'success' => false,
        'errors' => [
            'global' => 'Mailjet error: ' . $response->getStatus() . ' - ' . json_encode($response->getBody())
        ]
    ]);
}
?>
