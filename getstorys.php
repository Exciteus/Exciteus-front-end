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



$id = $_GET['id'];
$number = $_GET['n'];
$limitlow;
$limithigh;
if ($number == 1) {
    $limitlow = 0;
    $limithigh = 1;
}
else if ($number == 2){
    $limitlow = 1;
    $limithigh = 1;
}
else if ($number == 3) {
     $limitlow = 2;
    $limithigh = 2;
}
else {
     $limitlow = 2;
    $limithigh = 2;
}





$query = "SELECT storydata FROM storys WHERE event_id =".$id." LIMIT ".$limitlow.",".$limithigh;


$storydata_array = array();

$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        
            $storydata= $row['storydata'];
        
        if(end(explode(".",$storydata)) =="mp4")
        {
            ?>
    <video playsinline autoplay loop muted style="min-width:100%; min-height:100%;">
        <source src="<?php  echo $storydata ?>" type="video/mp4">

    </video>

    <?php 
        
        }
        else {
            ?>
        <img id="story_image" src="<?php  echo $storydata ?>">


        <?php  
            
        }

             
       
    }
} else {
    echo "0 results";
}

mysqli_close($conn);

?>