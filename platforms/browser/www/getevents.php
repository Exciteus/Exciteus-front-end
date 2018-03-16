<?php


header('Access-Control-Allow-Origin: *');




include 'connect.php';
$txt1 = 5;
echo "<h2>" . $txt1 . "</h2>";


$query = "SELECT * FROM events ORDER BY date";


	
	$result = mysqli_query($query);
	
	if($result){
		while($row = mysql_fetch_array($result)){
            $txt1 = $row['titel'];
            echo "<h2>" . $txt1 . "</h2>"; 

        } 
    }
?>