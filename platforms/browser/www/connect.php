<?php

   $dbhost = 'mydbzoveel.cekdiapdwnm1.us-west-2.rds.amazonaws.com';
   $dbuser = 'mart';
   $dbpass = 'platform2018U';
   $dbname = 'dbname';
   $con = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
    $result = $con;
   if(! $con )
   {
     die('Could not connect to instance: ' . mysqli_error($con));
   }
   echo 'Connected to MySQL Successfully!';
   
?>