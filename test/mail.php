<?php 
// ini_set( 'display_errors', 1 );
// error_reporting( E_ALL );
// $from = "test@patrickwang.pw";
// $to = $_POST['email'];
// $subject = "Checking PHP mail";
// $message = $_POST['message'].'<br>'.date("m/d/Y h:i:sa");
// echo $message ."<br>";
// $headers = "From:" . $from;
// mail($to,$subject,$message, $headers);
// echo "The email message was sent.";

use PHPMailer\PHPMailer\PHPMailer;
require '../vendor/autoload.php';
date_default_timezone_set("America/Los_Angeles");
$mail = new PHPMailer;
$mail->isSMTP();
$mail->SMTPDebug = 2;
$mail->Host = 'mx1.hostinger.com';
$mail->Port = 587;
$mail->SMTPAuth = true;
$mail->Username = 'test@patrickwang.pw';
$mail->Password = '12345trewqWERT';
$mail->setFrom('test@patrickwang.pw', 'Patrick Wang');
$mail->addReplyTo('test@patrickwang.pw', 'Patrick Wang');
$mail->addAddress('patrick.bohan.wang@gmail.com', 'Patrick Wang');
$mail->Subject = 'PHP Mailer Test';
$mail->isHTML(true);
$mail->Body = $_POST['message'].'<br>'.date("m/d/Y h:i:sa");
// $mail->addAttachment('test.txt');
if (!$mail->send()) {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message sent!';
}
?>