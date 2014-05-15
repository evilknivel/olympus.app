<?php
session_start();

    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "frank-martin.holz@olympus.de";
    $email_subject = "Anfrage APP";      

    $name   = $_POST['name']; // required
    $first_name = $_POST['surname']; // required
    $unit   = $_POST['unit']; // required
    $kdn   = $_POST['kdn']; // required
    $email_from = $_POST['email']; // required
    $telephone   = $_POST['tel']; // not required
    $device   = $_POST['device']; // required
    $sn    = $_POST['sn']; // required
    $errmesg  = $_POST['error']; // not required



      function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
      }

  $datum = date('d.m.Y H:i:s');

  $email_message = "===================================================\n";
  $email_message .= "Mobile contact form " . $_SERVER['HTTP_HOST'] . "\n";
  $email_message .= "===================================================\n\n";
      $email_message .= "Name: ".clean_string($name)."\n";
      $email_message .= "Vorname: ".clean_string($first_name)."\n";
      $email_message .= "Abteilung: ".clean_string($unit)."\n";
      $email_message .= "Kundennummer: ".clean_string($kdn)."\n";
      $email_message .= "Emailadresse: ".clean_string($email_from)."\n";
      $email_message .= "Telefonnummer: ".clean_string($telephone)."\n";
      $email_message .= "Gerät: ".clean_string($device)."\n";
      $email_message .= "Seriennummer: ".clean_string($sn)."\n";
      $email_message .= "Fehlerbeschreibung: ".clean_string($errmesg)."\n\n";
      $email_message .= "gesendet am " . $datum . "\n\n";
  $email_message .= "===================================================";


// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();

  mail($email_to, $email_subject, $email_message, $headers);
  header("Location: index.html#succes");

?>
