<?php
session_start();
if(isset($_POST['mail'])){
    // antiflood controle
    if (!empty($_SESSION['antiflood']))
    {
        $seconde = 20; // 20 seconds anti-flooding
        $tijd = time() - $_SESSION['antiflood'];
        if($tijd < $seconde)
            $antiflood = 1;
    }

    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "fmholz@gmail.com";
    $email_subject = "APP Kontakt Form";      

    $first_name = $_POST['naam']; // required
    $email_from = $_POST['mail']; // required
    $telephone = $_POST['telefoon']; // not required
	  $subject	= $_POST['onderwerp']; // not required
    $comments = $_POST['bericht']; // required

    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }

	$datum = date('d/m/Y H:i:s');

	$email_message = "===================================================\n";
	$email_message .= "Mobile contact form " . $_SERVER['HTTP_HOST'] . "\n";
	$email_message .= "===================================================\n\n";
    $email_message .= "Name: ".clean_string($first_name)."\n";
    $email_message .= "E-mail: ".clean_string($email_from)."\n";
    $email_message .= "Tel: ".clean_string($telephone)."\n";
	  $email_message .= "Subject: ".clean_string($subject)."\n";
    $email_message .= "Message: ".clean_string($comments)."\n\n";
    $email_message .= "Send on " . $datum . " from IP address " . $_SERVER['REMOTE_ADDR'] . "\n\n";
	$email_message .= "===================================================\n";
	$email_message .= "Tech support:\n";
	$email_message .= "===================================================\n\n";
	$email_message .= $_SERVER['HTTP_USER_AGENT'];

// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
 if (($antiflood == "")) 
  {
	$_SESSION['antiflood'] = time();
	  @mail($email_to, $email_subject, $email_message, $headers);
	  
	}
?>
