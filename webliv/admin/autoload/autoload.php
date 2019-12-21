<?php 
	session_start();
    require_once  __DIR__. "/../../libraries/database.php";
    require_once  __DIR__. "/../../libraries/function.php";  
    $db = new database;

    if(!isset($_SESSION['admin_id']))
    {
    	header("location:/webliv/login");
    }

    define("ROOT", $_SERVER['DOCUMENT_ROOT'] ."/webliv/public/uploads/")
    
 ?>