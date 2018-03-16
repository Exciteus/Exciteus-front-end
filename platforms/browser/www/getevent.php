<?php
header("Access-Control-Allow-Origin: *");
 $dbhost = 'localhost';
   $dbuser = 'maarten';
   $dbpass = 'maarten';
   $dbname = 'exciteusdb';


$servername = "mydbzoveel.cekdiapdwnm1.us-west-2.rds.amazonaws.com";
$username = "mart";
$password = "platform2018U";

// Create connection
$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
    
}
echo "Connected successfully";



$id = $_GET['id'];

echo $id;

$query = "SELECT * FROM event_detail WHERE event_id=".$id;
$query2 = "SELECT * FROM events WHERE event_id=".$id;





$result = mysqli_query($conn, $query2);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        
        $titel = $row['titel'];
      
        $icon = $row['icon_source'];
        $tijd = $row['time_text'];
           
?>  
        
<?php       
       
    }
} else {
    echo "0 results";
}
$result2 = mysqli_query($conn, $query);

if (mysqli_num_rows($result2) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result2)) {
        $place = $row['place_long'];
        echo place;
        $description = $row['description'];
        $promotion = $row['promotion'];
        $datum = $row['date_text'];
        $image = $row['foto_source'];
          
?>  
        
<?php       
       
    }
} else {
    echo "0 results";
}




mysqli_close($conn);

/*

$result = mysqli_query($conn, $query);
$result2 = mysqli_query($conn, $query2);


$titel;
$place;
$description;
$promotion;
$datum;


$row = mysqli_fetch_row($result);






$icon = $row['icon_source'];
$tijd = $row['time_text'];
$titel = $row['titel'];

echo $row;
*/


        
        
?>
        <div class="event-head">
            <img class="icon" src="<?php echo $icon ?>">
            <div class="event-div">
                <h2><?php echo $titel ?></h2>
                <h3><?php echo $place ?></h3>
                
            </div>
        </div>
        <section class="description-one">
            <h4>DESCRIPTION</h4>
            <h5>WANNEER: <?php echo $datum ?></h5>
            <h5>DUUR: <?php echo $tijd ?></h5>
            <h4 class="promo"><?php echo $promotion ?></h4>
        </section>
        <section class="description-twoo">
        <p><?php echo $description ?></p>
        <img src="<?php echo $image ?>">   
        </section>

<?php

                 ?>



