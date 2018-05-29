$(document).ready(function () {

    var tempid;

    $('.drawer').drawer();



    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        console.log(StatusBar);
    }
    /*
    $(".event-item").click(function () {

        console.log("click");
        window.location.href = "event.html";
    });
    $(".event-item-highlight").click(function () {

        console.log("click");
        window.location.href = "event.html";
    });
    */

    window.onscroll = function () {
        myFunction()
    };

    // Get the header
    var header = document.getElementById("myHeader");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }



    console.log("request");
    var cover = "hallo";
    var htmlstring = "";
    var nextstring;
    var output = document.getElementById("events");


    /* get data with json */
    $.ajax({
        type: 'GET',
        crossOrigin: true,
        url: url + "external/events/upcoming",

        dataType: "json",
        success: function (data) {
            $.each(data, function (index, element) {

                        var time_upper = timeConverter(element.startTime);
                        var time = time_upper.toLowerCase();

<<<<<<< HEAD
                var promo = element.promotion.name;
                console.log(promo);
                

                if (!promo || promo == undefined || promo == "" || promo.length == 0 || promo == "GEEN PROMOTIE") {
                    promo = "";
                }
=======

>>>>>>> parent of 131fa8e... Version 1.0.4

                        /*

                        nextstring = "<div class='event-item' id='" + element.id + "'><img class='icon' src='" + element.icon + "'><div class='event-div'><h2>" + element.title + "</h2><h3>" + element.place.name + "</h3><div class='event-div-info'><h4>" + time + "</h4><h5>" + element.promotion.name + "</h5></div></div></div>";
                        */




                        if (element.highlighted == true) {
                            if (element.category == "CAFE") {
                                nextstring = "<div class='event-item' category='" + element.category + "' address='" + element.place.address + "' id='" + element.id + "' style='border-bottom: 3px solid #F71BAD;' ><img class='icon' src='" + element.icon + "'><div class='event-div'><h2>" + element.title + "</h2><h3>" + element.place.name + "</h3><div class='event-div-info'><h5>" + element.promotion.name + "</h5></div></div><img class='coverphoto' src='" + element.coverPhoto + "'></div>";
                                
                            }
                            else {
                                nextstring = "<div class='event-item' category='" + element.category + "' address='" + element.place.address + "' id='" + element.id + "' style='border-bottom: 3px solid #F71BAD;' ><img class='icon' src='" + element.icon + "'><div class='event-div'><h2>" + element.title + "</h2><h3>" + element.place.name + "</h3><div class='event-div-info'><h4><i class='material-icons icon-small '>access_time</i> " + time + "</h4><h5>" + element.promotion.name + "</h5></div></div><img class='coverphoto' src='" + element.coverPhoto + "'></div>";
                                
                            }

                            
                        } else {
                            if (element.category == "CAFE") {
                                nextstring = "<div class='event-item'  category='" + element.category + "' address='" + element.place.address + "' id='" + element.id + "'><img class='icon' src='" + element.icon + "'><div class='event-div'><h2>" + element.title + "</h2><h3>" + element.place.name + "</h3><div class='event-div-info'><h5>" + element.promotion.name + "</h5></div></div><img class='coverphoto' src='" + element.coverPhoto + "'></div>";
                                
                            }
                            else {
                                nextstring = "<div class='event-item'  category='" + element.category + "' address='" + element.place.address + "' id='" + element.id + "'><img class='icon' src='" + element.icon + "'><div class='event-div'><h2>" + element.title + "</h2><h3>" + element.place.name + "</h3><div class='event-div-info'><h4><i class='material-icons icon-small'>access_time</i> " + time + "</h4><h5>" + element.promotion.name + "</h5></div></div><img class='coverphoto' src='" + element.coverPhoto + "'></div>";
                                
                            }
                            
                            
                            
                            
                        }





                        htmlstring += nextstring;
                        console.log(htmlstring);

                  







            });
            output.innerHTML = htmlstring;





            setTimeout(function () {
                $('#preloader').fadeOut('slow', function () {

                    $(this).remove();


                    $('.event-item').click(function () {
                        console.log("click");
                        var myid = $(this).attr("id");
                        var mycategory = $(this).attr("category");
                        window.location.href = 'event.html?id=' + myid+'&category='+mycategory;

                    });
                    $('.event-item-highlight').click(function () {
                        console.log("click");
                        console.log("click");
                        var myid = $(this).attr("id");
                        var mycategory = $(this).attr("category");
                        window.location.href = 'event.html?id=' + myid+'&category='+mycategory;

                    })


                });
            }, 200);






        }
    });





    function getCoverphotos(id) {
        var res;
        $.ajax({
            type: 'GET',
            crossOrigin: true,
            url: url + "external/events/" + id,

            dataType: "json",
            success: function (data) {
                console.log('coverphoto succes');
                console.log(data.coverPhoto);
                res = data.coverPhoto.toString();
                cover = res;
                console.log(cover);


            }
        });



    }





    https: //excite-us.herokuapp.com/external/bars/bar-14e414a3-b6e2-44b8-aa88-c73c8ef4be72



        function timeConverter(UNIX_timestamp) {
            str = UNIX_timestamp.toString();

            str = str.slice(0, -3);
            str = parseInt(str);



            // Months array
            var months_arr = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

            // Convert timestamp to milliseconds
            var date = new Date(str * 1000);

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





            var TimeNowMilliSeconds = new Date().getTime();
            if ((UNIX_timestamp - TimeNowMilliSeconds) < 86400000) {
                var timestr = '    ' + hours.toString() + ':' + minutes.substr(-2)
            } else {
                var timestr = '    ' + day.toString() + '/' + month + /*+ year.toString();*/ '  -  ' + hours.toString() + ':' + minutes.substr(-2)
            }

            // Display date time in MM-dd-yyyy h:m:s format
            /*
             var convdataTime = month + '-' + day + '-' + year + '  ' + hours + ':' + minutes.substr(-2);
             var lowercase = convdataTime;
             */
            return timestr;

        }







});


/*

[  
   {  
      "id":"evt-c8c1d659-9055-460e-a2d6-93f2d2f71a79",
      "icon":"https://not-implemented-yet.png",
      "title":"test-event-1",
      "place":{  
         "name":"Alma 2",
         "address":"Parkstraat"
      },
      "promotion":{  
         "name":""
      },
      "category":"TD",
      "startTime":1522156780138
   },
   {  
      "id":"evt-669d88e4-f180-4399-b78e-9b3f64fefe93",
      "icon":"https://not-implemented-yet.png",
      "title":"promotional",
      "place":{  
         "name":"Alma 2",
         "address":"Parkstraat somethign"
      },
      "promotion":{  
         "name":"Gratis bier."
      },
      "category":"TD",
      "startTime":1522157668595
   }
]


*/