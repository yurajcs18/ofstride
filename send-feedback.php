<?php
if($_POST){
    $name = $_POST['feedback_name'];
    $email = $_POST['feedback_email'];
    $comments = $_POST['feedback_comments'];

//send email
    mail("admin@ofstrideservices.com","Website feedback form", $email, $comments);
    //mail("vishantalur@gmail.com","Website feedback form", $email, $comments);
}
?>
