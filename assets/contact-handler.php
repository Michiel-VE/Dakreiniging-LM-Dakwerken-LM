<?php
require 'vendor/autoload.php';

use \Mailjet\Resources;

$env = parse_ini_file('../../.env');

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: https://dakreiniginglm.be");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

function sanitize($data) {
    return htmlspecialchars(trim($data), ENT_QUOTES, 'UTF-8');
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'errors' => ['global' => 'Invalid request method']]);
    exit;
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

$errors = [];

if (!$naam) $errors['naam'] = 'Naam is verplicht.';
if (!$email) $errors['email'] = 'Voer een geldig e-mailadres in.';
if (!$dienst) $errors['dienst'] = 'Selecteer een dienst.';
if (!$onderwerp) $errors['onderwerp'] = 'Geef een beschrijving van uw aanvraag.';

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'errors' => $errors]);
    exit;
}


// Your templates (use HEREDOC syntax for readability)
$adminTemplate = <<<HTML
<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: Arial, sans-serif; background-color: #f4f8fc; color: #333; padding: 20px; }
    .container { background-color: #ffffff; border-left: 5px solid #007BFF; padding: 20px; max-width: 600px; margin: auto; box-shadow: 0 0 10px rgba(0,0,0,0.05); }
    .header { border-bottom: 1px solid #e0e0e0; margin-bottom: 20px; }
    h2 { color: #007BFF; margin: 0 0 10px; }
    .info { margin-bottom: 15px; }
    .label { font-weight: bold; color: #555; }
    .value { margin-left: 5px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Nieuw contactformulier ontvangen</h2>
    </div>
    <div class="info"><span class="label">Naam:</span><span class="value">{$naam}</span></div>
    <div class="info"><span class="label">E-mailadres:</span><span class="value">{$email}</span></div>
    <div class="info"><span class="label">Dienst:</span><span class="value">{$dienst}</span></div>
    <div class="info"><span class="label">Vraag / Bericht:</span><br/><span class="value">{$onderwerp}</span></div>
  </div>
</body>
</html>
HTML;

$userTemplate = <<<HTML
<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: Arial, sans-serif; background-color: #eef5fd; color: #333; padding: 20px; }
    .container { background-color: #ffffff; border-left: 5px solid #007BFF; padding: 20px; max-width: 600px; margin: auto; box-shadow: 0 0 10px rgba(0,0,0,0.05); }
    h2 { color: #007BFF; }
    p { line-height: 1.6; }
  </style>
</head>
<body>
  <div class="container">
    <h2>Bedankt voor je bericht, {$naam}!</h2>
    <p>
      We hebben je aanvraag goed ontvangen met betrekking tot <strong>{$dienst}</strong>.
    </p>
    <p>
      We zullen zo spoedig mogelijk contact met je opnemen om je verder te helpen.
    </p>
    <p>
      Met vriendelijke groet,<br/>
      Het team van Dakreiniging LM | Dakwerken LM
    </p>
  </div>
</body>
</html>
HTML;


$mj = new \Mailjet\Client($env['MAILJET_API_KEY'], $env['MAILJET_API_SECRET'], true, ['version' => 'v3.1']);

$body = [
  'Messages' => [
    // Admin email
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
    // User confirmation email
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
    echo json_encode(['success' => false, 'errors' => ['global' => 'Er is een fout opgetreden bij het verzenden van je bericht. Probeer het later opnieuw.']]);
}
