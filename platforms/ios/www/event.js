$(document).ready(function () {
    $('.drawer').drawer();
    var id = getQueryStringValue('id');
    var story1;
    var story2;
    var story3;
    var n = 1;
    var clickcounter = 1;

    function getQueryStringValue(key) {
        return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
    }

    var xhttp = new XMLHttpRequest();
    var xhttp_story = new XMLHttpRequest();
    var xhttp_story2 = new XMLHttpRequest();
    var xhttp_story3 = new XMLHttpRequest();
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



});