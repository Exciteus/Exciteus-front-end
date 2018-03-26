$(document).ready(function () {
    $('.drawer').drawer();


    var id = getQueryStringValue('id');
    var htmlstring = "";
    var output = document.getElementById("events");
    var urll = "https://on-the-moment-dev.herokuapp.com/external/events/" + id;
    console.log(urll);
    /*
    var story1;
    var story2;
    var story3;
    var n = 1;
    var clickcounter = 1;
    */

    /* get id from query string */
    function getQueryStringValue(key) {
        return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
    }



    /* get data with json for detail screen */
    $.ajax({
        type: 'GET',
        crossOrigin: true,
        url: "https://on-the-moment-dev.herokuapp.com/external/events/" + id,

        dataType: "json",
        success: function (data) {
            console.log(data.icon);
            
            /* old nextstring

            nextstring = "<div class='event-item' id='" + element.id + "'><img class='icon' src='" + element.icon + "'><div class='event-div'><h2>" + element.title + "</h2><h3>" + element.place.name + "</h3><div class='event-div-info'><h4>" + time + "</h4><h5>" + element.promotion.name + "</h5></div></div></div>";
            */
            nextstring = "<div class='event-head'><img class='icon' src='" + data.icon + "'><div class='event-div'><h2>" + data.title + "</h2><h3>" + data.place.name + ", " + data.place.address + "</h3></div></div><section class='description-one'><h4>DESCRIPTION</h4><h5>WHEN: " + OnlyDateConverter(data.startTime) + "</h5><h5>START: " + OnlyTimeConverter(data.startTime) + "</h5><h4 class='promo'>undifined</h4></section><section class='description-twoo'><p>" + data.description + "</p><img src='undefined'></section>";

            htmlstring += nextstring;
            output.innerHTML = htmlstring;
        }
    });

    /* unix time to human read time */
    function timeConverter(UNIX_timestamp) {
        // Months array
        var months_arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        // Convert timestamp to milliseconds
        var date = new Date(UNIX_timestamp * 1000);

        // Year
        var year = date.getFullYear();

        // Month
        var month = months_arr[date.getMonth()];

        // Day
        var day = date.getDate();

        // Hours
        var hours = date.getHours();

        // Minutes
        var minutes = "0" + date.getMinutes();



        // Display date time in MM-dd-yyyy h:m:s format
        var convdataTime = month + '-' + day + '-' + year + ' ' + hours + ':' + minutes.substr(-2);
        return convdataTime;

    }

    function OnlyTimeConverter(UNIX_timestamp) {
        var date = new Date(UNIX_timestamp * 1000);
        var hours = date.getHours();

        // Minutes
        var minutes = "0" + date.getMinutes();
        var conv = hours + ':' + minutes.substr(-2);
        return conv;
    }

    function OnlyDateConverter(UNIX_timestamp) {
        // Convert timestamp to milliseconds
        var date = new Date(UNIX_timestamp * 1000);
        var months_arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        // Year
        var year = date.getFullYear();

        // Month
        var month = months_arr[date.getMonth()];

        // Day
        var day = date.getDate();

        var conv = month + '-' + day + '-' + year;
        return conv;
    }

    /* json return
    
    {  
   "icon":"https://not-implemented-yet.png",
   "title":"test-event-1-long",
   "description":"Ths is a test event",
   "place":{  
      "name":"Alma 2",
      "address":"Parkstraat"
   },
   "stories":{  
      "images":[  

      ]
   },
   "startTime":1522156780138
}

*/









    /*
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            console.log(id);
            document.getElementById("events").innerHTML = xhttp.responseText;

            // Get the modal
            var modal = document.getElementById('myModal');
            var modalinside = document.getElementById('modelinside');

            // Get the button that opens the modal
            var btn = document.getElementById("myBtn");

            // Get the <span> element that closes the modal
            var span =  document.getElementsByClassName("close")[0];

            // When the user clicks on the button, open the modal 

            $(".icon").click(function () {
                document.getElementById("modelinside").innerHTML = story1;
                console.log(story1);
                modal.style.display = "block";
                n = n + 1;


                xhttp_story2.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        story2 = xhttp_story2.responseText;






                        
                        $("#modelinside").click(function () {
                            //next
                            n = n + 1;

                            xhttp_story3.onreadystatechange = function () {
                                if (this.readyState == 4 && this.status == 200) {
                                    story3 = xhttp_story3.responseText;

                                }



                            };
                            xhttp_story3.open("GET", "http://www.exciteus.live/getstorys.php?id=" + id + "&n=" + n, true);
                            xhttp_story3.send();




                            
                            if (clickcounter == 1) {
                                document.getElementById("modelinside").innerHTML = story2;
                                console.log(story2);
                                console.log(clickcounter);
                                clickcounter++;
                            } else if (clickcounter == 2) {
                                document.getElementById("modelinside").innerHTML = story3;
                                clickcounter++;
                                console.log(story3);
                                 console.log(clickcounter);
                            }
                            else if (clickcounter == 3) {
                              modal.style.display = "none";
                                 console.log(clickcounter);
                                clickcounter = 1;
                                
                                
                            }
                        });
                    }

                };
                xhttp_story2.open("GET", "http://www.exciteus.live/getstorys.php?id=" + id + "&n=" + n, true);
                xhttp_story2.send();


            });

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
                n = 1;
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function (event) {
                if (event.target == modalinside) {
                    modal.style.display = "none";
                }
            }




            xhttp_story.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    story1 = xhttp_story.responseText;

                }



            };
            xhttp_story.open("GET", "http://www.exciteus.live/getstorys.php?id=" + id + "&n=" + n, true);
            xhttp_story.send();

        };

    };
    xhttp.open("GET", "http://www.exciteus.live/getevent.php?id=" + id, true);
    xhttp.send();

*/

});