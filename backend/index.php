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
$message .="<div> Klient ".$c_name."  jego numer kontaktowy to ".$c_phone." i mail ".$c_email." zostawił/a wiadomość </div>";
$message .="<div>".$c_msg."</div>";
$message .="<div>".$time."</div>";
$message .="</body></html>";

try {
    //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'bmworgpl@gmail.com';                     //SMTP username
    $mail->Password   = 'password123';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;            //Enable implicit TLS encryption
    //$mail->SMTPSecure = false;
	$mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('bmworgpl@gmail.com', 'Mailer');
    $mail->addAddress('biuro@bmw.org.pl', 'Biuro');     //Add a recipient
  
    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Nowa wiadomość od klienta';
    $mail->Body    = $message;
    $mail->AltBody = strip_tags($message);

    $mail->send();
    echo "OK";

} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
