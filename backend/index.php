<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

$c_name=trim($_POST['c_name']);
$c_email=trim($_POST['c_email']);
$c_phone=trim($_POST['c_phone']);
$c_msg=trim($_POST['c_msg']);
$time=date('Y-m-d H:i:s');


//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);


$message="<html><body>";
$message .="<div> The vistor ".$c_name." with contact details no.".$c_name." and ".$c_email." have left a message </div>";
$message .="<div>".$c_msg."</div>";
$message .="<div>".$time."</div>";
$message .="</body></html>";

try {
    //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp-mail.outlook.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'alahliamso@hotmail.com';                     //SMTP username
    $mail->Password   = 'password';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;            //Enable implicit TLS encryption
    $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('alahliamso@hotmail.com', 'Mailer');
    $mail->addAddress('d_dhairya@yahoo.com', 'User');     //Add a recipient
  
    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Here is the subject';
    $mail->Body    = $message;
    $mail->AltBody = strip_tags($message);

    $mail->send();
    header("location: https://bmw.org.pl");

} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
