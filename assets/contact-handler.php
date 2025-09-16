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

function sanitize($data)
{
  return htmlspecialchars(trim($data), ENT_QUOTES, 'UTF-8');
}

if (!empty($_POST['website'])) {
  http_response_code(403);
  echo json_encode(['success' => false, 'errors' => ['global' => 'Bot detected.']]);
  exit;
}

$privateKeyString = $env['PRIVATE_KEY'] ?? null;
$privateKey = str_replace('\\n', "\n", $privateKeyString);


if (!$privateKey) {
  http_response_code(500);
  echo json_encode(['success' => false, 'errors' => ['global' => 'Private key not found']]);
  exit;
}

function decryptField($encrypted, $privateKey)
{
  $decoded = base64_decode($encrypted);
  if ($decoded === false) {
    return null;
  }

  $decrypted = null;
  $success = openssl_private_decrypt($decoded, $decrypted, $privateKey);
  if (!$success) {
    error_log('Decryption failed: ' . openssl_error_string());
    return null;
  }
  return $decrypted;
}


$naam      = decryptField($_POST['naam'] ?? '', $privateKey);
$email     = filter_var(decryptField($_POST['email'] ?? '', $privateKey), FILTER_VALIDATE_EMAIL);
$gsm       = decryptField($_POST['gsm'] ?? '', $privateKey);
$straat    = decryptField($_POST['straat'] ?? '', $privateKey);
$nummer    = decryptField($_POST['nummer'] ?? '', $privateKey);
$postcode  = decryptField($_POST['postcode'] ?? '', $privateKey);
$gemeente  = decryptField($_POST['gemeente'] ?? '', $privateKey);
$dienst    = decryptField($_POST['dienst'] ?? '', $privateKey);
$onderwerp = decryptField($_POST['onderwerp'] ?? '', $privateKey);
$recaptchaToken = $_POST['recaptcha_token'] ?? '';

$errors = [];

$recaptchaSecret = $env['RECAPTCHA_SECRET_KEY'];
$recaptchaResponse = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$recaptchaSecret&response=$recaptchaToken");
$recaptchaData = json_decode($recaptchaResponse, true);

if ($recaptchaData['success'] !== true || $recaptchaData['score'] < 0.65) {
  $errors['recaptcha'] = 'reCAPTCHA validatie mislukt. Probeer opnieuw.';
}

if (!$naam)            $errors['naam']      = 'Naam is verplicht.';
if (!$email)           $errors['email']     = 'Voer een geldig e-mailadres in.';
if (!$gsm || !preg_match('/^(?:\+32|0032)?0?(4[5-9]\d{7}|[1-9]\d{7})$/', $gsm)) {
  $errors['gsm'] = 'Voer een geldig GSM-nummer in.';
}
if (!$straat)          $errors['straat']    = 'Straat is verplicht.';
if (!$nummer)          $errors['nummer']    = 'Huisnummer is verplicht.';
if (!$postcode || !preg_match('/^\d{4}$/', $postcode)) {
  $errors['postcode'] = 'Postcode moet 4 cijfers zijn.';
}
if (!$gemeente)        $errors['gemeente']  = 'Gemeente is verplicht.';
if (!$dienst)          $errors['dienst']    = 'Selecteer een dienst.';
if (!$onderwerp || strlen($onderwerp) < 5) {
  $errors['onderwerp'] = 'Onderwerp moet minstens 5 tekens bevatten.';
}

if (!empty($errors)) {
  http_response_code(400);
  echo json_encode(['success' => false, 'errors' => $errors]);
  exit;
}

$adres = $straat . ' ' . $nummer . ', ' . $postcode . ' ' . $gemeente;

$data = [
  'naam'      => sanitize($naam),
  'email'     => sanitize($email),
  'gsm'       => sanitize($gsm),
  'adres'     => sanitize($adres),
  'dienst'    => sanitize($dienst),
  'onderwerp' => sanitize($onderwerp)
];


function loadTemplate($file, $data)
{
  $template = file_get_contents($file);
  foreach ($data as $key => $value) {
    $template = str_replace("{{" . $key . "}}", $value, $template);
  }
  return $template;
}

$adminTemplate = loadTemplate('templates/admin_template.html', $data);
$userTemplate = loadTemplate('templates/user_template.html', $data);

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
      'Subject' => "Nieuw contactformulier bericht van {$data['naam']}",
      'HTMLPart' => $adminTemplate,
      'CustomID' => "ContactFormAdmin"
    ],
    [
      'From' => [
        'Email' => "info@dakreiniginglm.be",
        'Name' => "Dakreiniging LM"
      ],
      'To' => [
        ['Email' => $data['email'], 'Name' => $data['naam']]
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
