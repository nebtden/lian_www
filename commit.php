<?php

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    $mail->SMTPDebug = 2;
    $mail->isSMTP();
    $mail->Host       = 'smtp.163.com';  
    $mail->SMTPAuth   = true;                               
    $mail->Username   = '18711108540@163.com';
    $mail->Password   = 'Youyi1990'; 
    $mail->Port       = 465;  
    $mail->SMTPSecure = 'ssl';
    $mail->setFrom('18711108540@163.com', 'Orange');
    $mail->addAddress('13077318830@163.com', 'An Li');
    $mail->isHTML(true); 
    $c_name = $_POST['c_name'];
    $c_phone = $_POST['c_phone'];
    $c_message = $_POST['c_message'];
    $date = date('Y-m-d',time());
    $stm= "日期：".$date." ,姓名:".$c_name." ,电话:".$c_phone." ,留言:".$c_message."\n";
    $mail->Subject = 'Customer service (Daily message board)';//客服数据（每日留言板）
    $mail->Body    = $stm;
    $mail->send();
    echo true;
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}