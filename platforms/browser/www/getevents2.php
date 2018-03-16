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



$query = "SELECT * FROM events ORDER BY date";
$querynew = "SELECT * FROM events WHERE event_id=1";



$result = mysqli_query($conn, $querynew);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        $id = $row['event_id'];
        $titel = $row['titel'];
        $icon = $row['icon_source'];
        $place = $row['place_short'];
        $time = $row['time_text'];
        $promotion = $row['promotion'];
           
?>  
        <div class='event-item' id='<?php echo $id ?>'>
            <img class="icon" src="<?php echo $icon ?>">
            <div class="event-div">
            <h2><?php echo $titel ?></h2>
            <h3><?php echo $place ?></h3>
                <div class="event-div-info">

                    <h4><?php echo $time ?></h4>

                    <h5><?php echo $promotion ?></h5>
                </div>
            </div>
        </div>
<?php       
       
    }
} else {
    echo "0 results";
}

mysqli_close($conn);

?>