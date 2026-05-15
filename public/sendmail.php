<?php
/**
 * Shah Shivji Valji & Company — Lead Form Mailer
 * Receives JSON POST from LeadForm.jsx and emails recipients via PHP mail().
 *
 * To change recipients, edit the $RECIPIENTS array below.
 * To change the From address, edit $FROM_ADDR / $FROM_NAME.
 */

// ---- CONFIG ----------------------------------------------------------------
$RECIPIENTS = [
    'bhavik.nagda@shivjivalji.com',
    'aakash.kalushte@shivjivalji.com',
];
$FROM_ADDR = 'noreply@shivjivalji.com';
$FROM_NAME = 'Shah Shivji Valji Website';
$SUBJECT_PREFIX = 'New Enquiry';
// ---------------------------------------------------------------------------

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid payload']);
    exit;
}

function clean($v) {
    return htmlspecialchars(trim((string)($v ?? '')), ENT_QUOTES, 'UTF-8');
}

$name        = clean($data['name']        ?? '');
$contact     = clean($data['contact']     ?? '');
$email       = clean($data['email']       ?? '');
$company     = clean($data['company']     ?? '');
$designation = clean($data['designation'] ?? '');
$industry    = clean($data['industry']    ?? '');
$location    = clean($data['location']    ?? '');
$message     = clean($data['message']     ?? '');

if ($name === '' || $contact === '' || $email === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Missing required fields']);
    exit;
}
if (!filter_var(html_entity_decode($email), FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid email']);
    exit;
}

// Prevent header injection via the email field used in Reply-To
$replyTo = preg_replace('/[\r\n].*/', '', html_entity_decode($email));

$subject = $SUBJECT_PREFIX . ' from ' . $name . ($company !== '' ? ' — ' . $company : '');
// Strip any CR/LF in subject (header-injection guard)
$subject = preg_replace('/[\r\n]+/', ' ', $subject);

$rows = [
    ['Name',           $name],
    ['Contact Number', $contact],
    ['Email',          $email],
    ['Company',        $company       !== '' ? $company       : '—'],
    ['Designation',    $designation   !== '' ? $designation   : '—'],
    ['Industry',       $industry      !== '' ? $industry      : '—'],
    ['Location',       $location      !== '' ? $location      : '—'],
    ['Message',        $message       !== '' ? nl2br($message) : '—'],
];

$tableRows = '';
foreach ($rows as $i => $row) {
    $bg = $i % 2 === 0 ? '#f7f7f7' : '#ffffff';
    $tableRows .= '<tr style="background: ' . $bg . ';">'
        . '<td style="padding: 10px 12px; font-weight: 600; color: #0F2340; width: 35%; vertical-align: top;">' . $row[0] . '</td>'
        . '<td style="padding: 10px 12px; color: #444; vertical-align: top;">' . $row[1] . '</td>'
        . '</tr>';
}

date_default_timezone_set('Asia/Kolkata');
$timestamp = date('d M Y, h:i A') . ' IST';

$htmlBody = '<!DOCTYPE html><html><body>'
    . '<div style="font-family: Arial, Helvetica, sans-serif; max-width: 640px; margin: 0 auto; color: #333; background: #fff; padding: 24px;">'
    .   '<div style="border-bottom: 3px solid #8B1A4A; padding-bottom: 14px; margin-bottom: 18px;">'
    .     '<h2 style="color: #8B1A4A; margin: 0 0 4px 0;">New Enquiry</h2>'
    .     '<p style="margin: 0; color: #666; font-size: 13px;">Shah Shivji Valji &amp; Co. — Website Lead Form</p>'
    .   '</div>'
    .   '<table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; border: 1px solid #e8e8e8; border-radius: 6px; overflow: hidden;">'
    .     $tableRows
    .   '</table>'
    .   '<p style="color: #999; font-size: 12px; margin-top: 22px;">'
    .     'Submitted: ' . $timestamp . '<br>Source: shivjivalji.com'
    .   '</p>'
    . '</div></body></html>';

$boundary = '----=_Part_' . md5(uniqid('', true));
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: ' . $FROM_NAME . ' <' . $FROM_ADDR . '>',
    'Reply-To: ' . $replyTo,
    'X-Mailer: PHP/' . phpversion(),
];

$to = implode(', ', $RECIPIENTS);

// --- Localhost dev fallback ------------------------------------------------
// PHP mail() doesn't work on WAMP/XAMPP out of the box. On localhost, log the
// email to a file and return success so the form flow can be verified end-to-end.
$host = strtolower($_SERVER['HTTP_HOST'] ?? '');
$isLocal = $host === '' || str_starts_with($host, 'localhost') || str_starts_with($host, '127.0.0.1');

if ($isLocal) {
    $logEntry = "==== " . date('Y-m-d H:i:s') . " IST ====\n"
        . "TO: $to\n"
        . "SUBJECT: $subject\n"
        . "REPLY-TO: $replyTo\n"
        . "---- HTML BODY ----\n$htmlBody\n\n";
    @file_put_contents(__DIR__ . '/sendmail.log', $logEntry, FILE_APPEND);
    echo json_encode(['success' => true, 'dev' => true, 'note' => 'Logged to sendmail.log (localhost)']);
    exit;
}
// ---------------------------------------------------------------------------

$ok = @mail($to, $subject, $htmlBody, implode("\r\n", $headers));

if ($ok) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'mail() failed — check server mail configuration']);
}
