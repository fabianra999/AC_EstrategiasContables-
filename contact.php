<?php
/**
 * Formulario
 *  $destino : correo destino;
 *  $name,$email,$email,$asunto,$mensage : campos formulario;
 *  $date : Fecha de envio;
 */
$destino = 'gerencia@acestrategiascf.com';
$name = $_POST['fName'];
$email = $_POST['fEmail'];
$tel = $_POST['fTel'];
$asunto = $_POST['fAsunto'];
$mensage = $_POST['fMensaje'];
$date = date('d/m/Y', time());

/**
 * Header Email
 */
$header = 'From: ' . $email . "\r\n";
$header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

/**
 * Body Email
 */
$mensaje = "Este mensaje fue enviado por " . $name . ".\r\n";
$mensaje .= "Numero telefonico: " . $tel . ".\r\n";
$mensaje .= "Su e-mail es: " . $email . ".\r\n";
$mensaje .= "Enviado el: " . $date . ".\r\n";
$mensaje .= "Su asunto: " . $asunto . ".\r\n";
$mensaje .= "Mensaje: " . $mensage . ".\r\n";

/**
 * Asunto Email
 */
$asuntoMail = 'Contacto sitio Web ACestrategiascf | ' . $name;

/**
 * Envio Email
 */
//mail($destino, $asuntoMail, utf8_decode($mensaje), $header);

//header('location:index.php');


$result = mail($destino, $asuntoMail, utf8_decode($mensaje), $header);
if (!$result) {
    //print "<p class='Error'>Problem in Sending Mail.</p>";
    // echo "Error";
    header("Location:contactoError.php");
} else {
    //print "<p class='success'>Contact Mail Sent.</p>";
    //echo "Success";
    header("Location:contactoSuccess.php");
}
?>
