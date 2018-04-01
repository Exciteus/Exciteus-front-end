$(document).ready(function () {
    $('.drawer').drawer();

    /* test! */
    $("#testform").submit(function (event) {
        alert("Handler for .submit() called.");
        event.preventDefault();

        /*
        formData = new FormData();
        formData.append('file', $('input[type=file]')[0].files[0]);
        console.log('inputed data');


        $.ajax({
            async: true,
            crossDomain: true,
            url: "https://on-the-moment-dev.herokuapp.com/external/stories/evt-2ebd0e70-e55a-4131-8c4b-500440bfd367",
            processData: false,
            contentType: false,
            type: 'POST',
            mimeType: "multipart/form-data",
            data: formData,
            success: function (data) {
                alert(data);
                $('body').prepend('<p>formdata sended</p>');


            },
            error: function (request, error) {


                alert(" error: Can't do because: " + request.responseText);
            }
        });


        /* test */



    });
    /* array with preloaded images */
    var PreloadedImages = [];
    var storiesAvailable = false;
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

    function gohome() {
        location.href = "index.html"
    }



    /* get data with json for detail screen */
    $.ajax({
        type: 'GET',
        crossOrigin: true,
        url: "https://on-the-moment-dev.herokuapp.com/external/events/" + id,

        dataType: "json",
        success: function (data) {


            if ((data.stories.length) > 0) {
                storiesAvailable = true;
                nextstring = "<div class='event-head'><img class='yellow-circle' src='img/yellow-circle.svg'><img class='icon' src='" + data.icon + "'><div class='event-div'><h2>" + data.title + "</h2><h3>" + data.place.name + ", " + data.place.address + "</h3></div></div><section class='description-one'><h4>DESCRIPTION</h4><h5>WHEN: " + OnlyDateConverter(data.startTime) + "</h5><h5>START: " + OnlyTimeConverter(data.startTime) + "</h5><h4 class='promo'>'" + data.promotion.name + "'</h4></section><section class='description-twoo'><p>" + data.description + "</p><p><a href=" + data.detailLink + ">more info...</a></p><img src='undefined'></section>";

                /* story array */
                var story_url_load_array = data.stories;
            } else {

                storiesAvailable = false;
                nextstring = "<div class='event-head'><img class='icon' src='" + data.icon + "'><div class='event-div'><h2>" + data.title + "</h2><h3>" + data.place.name + ", " + data.place.address + "</h3></div></div><section class='description-one'><h4>DESCRIPTION</h4><h5>WHEN: " + OnlyDateConverter(data.startTime) + "</h5><h5>START: " + OnlyTimeConverter(data.startTime) + "</h5><h4 class='promo'>'" + data.promotion.name + "'</h4></section><section class='description-twoo'><p>" + data.description + "</p><p><a href=" + data.detailLink + ">more info...</a></p><img src=" + data.coverPhoto + "></section>";

            }

            htmlstring += nextstring;
            output.innerHTML = htmlstring;

            setTimeout(function () {
                $('#preloader').fadeOut('slow', function () {
                    $(this).remove();
                });
            }, 0);

            $(".yellow-circle").click(function () {
                console.log("open stories");

                if (storiesAvailable) {


                    /* show stories */

                    var htmloutput = '<div id="confirm-image"><img id="back-arrow" class="noSelect" src="img/back-arrow.svg"><div id="send-image"><h7>Next</h7></div><img id="story-image" src=""> </div>';
                    $('body').prepend(htmloutput);

                    $('#back-arrow').click(function () {
                        location.reload();
                    });


                    /* input first story image */
                    var i = 0;


                    if (data.stories.length >= PreloadedImages.length) {
                        /* if image is not loaded yet */
                        document.getElementById('story-image').src = data.stories[i];
                        console.log("not loaded");
                    } else {
                        /* if image is loaded */
                        document.getElementById('story-image').src = (PreloadedImages[i].src);
                        console.log("ready");
                    }


                    $('#send-image').click(function () {
                        console.log("next");
                         console.log(data.stories[i]);
                        if (data.stories.length == 1) {
                            $('#confirm-image').remove();
                        } else {
                            i = i + 1;


                            if (data.stories.length > PreloadedImages.length) {
                                /* if image is not loaded yet */
                                var newsrc = (data.stories[i]);
                               
                                $("#story-image").attr("src",newsrc);
                                
                             
                                
                            } else if (story_url_load_array.length <= i) {
                                /* all storys seen */
                                $('#confirm-image').remove();

                            } else if (data.stories.length <= PreloadedImages.length) {
                                /* if image is loaded */
                                document.getElementById('story-image').src = PreloadedImages[i].src;
                                console.log("ready2: "+PreloadedImages[i].src);
                               
                            }
                        }




                    });

                }

            });

            /* preloader */

            preload(story_url_load_array);


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




    function preload(arrayOfImages) {
        $(arrayOfImages).each(function () {
            var story = new Image();
            story.src = this;
            PreloadedImages.push(story);

        });
    }



            /* example story array 
            var story_url_load_array = [
                "http://thewallpaper.co/wp-content/uploads/2016/10/1080-x-1920-Image-HD-Vertical-hd-desktop-wallpapers-cool-images-download-apple-background-wallpapers-windows-colourfull-display-lovely-wallpapers-1080x1920-768x1365.jpg",
                "http://thewallpaper.co/wp-content/uploads/2016/10/1080-x-1920-HD-Image-Vertical-cool-images-amazing-hd-download-windows-colourfull-display-lovely-wallpapers-1080x1920-768x1365.jpg",
                "https://www.pixelstalk.net/wp-content/uploads/2016/08/1080-x-1920-Background-HD-Vertical.jpg",
                "https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-HD-1080-x-1920-Background-Vertical-PIC-WPD008558.jpg"

            ];
            */





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