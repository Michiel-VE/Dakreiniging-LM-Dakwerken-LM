<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: https://dakreiniginglm.be");


function sanitize($data)
{
    return htmlspecialchars(trim($data), ENT_QUOTES, 'UTF-8');
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'errors' => ['global' => 'Invalid request method']]);
    exit;
}

// Honeypot check
if (!empty($_POST['website'])) {
    http_response_code(403);
    echo json_encode(['success' => false, 'errors' => ['global' => 'Bot detected.']]);
    exit;
}

// Sanitize and validate
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

// Forward to FormSubmit using cURL
$formSubmitUrl = 'https://formsubmit.co/e7c16f3ded6160e26886f3ee97fe1747';

$postData = [
    'naam' => $naam,
    'email' => $_POST['email'],
    'dienst' => $dienst,
    'onderwerp' => $onderwerp,
    '_captcha' => 'false',
    '_template' => 'table',
    '_subject' => 'Dakreiniging LM | Dakwerken LM: Nieuw bericht',
    '_blacklist' => 'koop nu, klik hier, gratis aanbod, werk van thuis, snel geld verdienen, risicovrij, beperkte tijd, nu handelen, creditcard vereist, geen kosten, afslanken snel, wondermiddel, bezoek onze site, exclusieve deal, verdien contant, bitcoin investering, online casino, gratis proef, investeer nu, snel rijk worden'
];

$ch = curl_init($formSubmitUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode >= 200 && $httpCode < 300) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Bedankt! Je aanvraag is verzonden.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'errors' => ['global' => 'Bericht kon niet verzonden worden. Probeer opnieuw.']]);
}
