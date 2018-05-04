$(document).ready(function () {


    $('.drawer').drawer();



    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        console.log(StatusBar);
    }

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
    var htmlstring = "";
    var output = document.getElementById("events");
    let max = 0;
    let recentPicsString ="";
    /* get data with json */
    $.ajax({
        type: 'GET',
        crossOrigin: true,
        url: "https://on-the-moment-dev.herokuapp.com/external/events/upcoming",

        dataType: "json",
        success: function (data) {
            $.each(data, function (index, element) {

                let storiesString ="";

                $.ajax({
                    type: 'GET',
                    crossOrigin: true,
                    url: "https://on-the-moment-dev.herokuapp.com/external/events/" + element.id,

                    dataType: "json",
                    success: function (data) {

                        if (data.stories.length > 0 && element.promotion.name !== "" && element.promotion.name !=null) {
                            storiesString = "<img class='icon stories hasapromo' style='margin-top: 15px;' src='" + element.icon + "' /> "
                        } else if (data.stories.length > 0 && element.promotion.name === "" || element.promotion.name ==null)
                        {
                            storiesString = "<img class='icon stories hasnopromo' style='margin-top: 15px;' src='" + element.icon + "' /> "
                        } else if (element.promotion.name !== "" || element.promotion.name !=null)
                        {
                            storiesString = "<img class='icon hasapromo' style='margin-top: 15px;' src='" + element.icon + "' /> "
                        } else {
                            storiesString = "<img class='icon hasnopromo' style='margin-top: 15px;' src='" + element.icon + "' /> "
                        }

                        nextstring =
                            "<div>" +
                            "<div class='event-card' id='" + element.id + "'>" +
                            storiesString +
                            "<div class='inline-block main-info'>" +
                            "<h5>" + element.title + "</h5>" +
                            "<h4 class='event-card-host'>" + element.place.name + "</h4>" +
                            /**"<i style='font-size: 15px' class='material-icons inline-block marker'>near_me</i>" +
                             "<h6 style='margin: 0px' class='inline-block'>3.1KM</h6>" +
                             "<br>" +*/
                            "<h2 class='event-item-highlight'>" + element.promotion.name + "</h2></span>" +
                            "</div>" +
                            "<img class='event-card-image' src='"+data.coverPhoto+"' />" +
                            "</div>" +
                            "</div>";


                        htmlstring += nextstring;
                        output.innerHTML = htmlstring;

                        $('.event-card').click(function () {
                            var myid = $(this).attr("id");
                            window.location.href = 'event.html?id=' + myid;

                        });


/* code voor die images boven
                        let container = document.getElementById("photo-container");

                        if (data.stories.length > 0 && max < 7) {
                            for (let x = 0; x < data.stories.length; x++)
                            {
                                if (max < 7) {
                                    recentPicsString = recentPicsString + "<img class='photo-list' src="+data.stories[x]+"/>";
                                }
                            }
                        }
                        container.innerHTML = recentPicsString;*/
                    }
                });

            });




            setTimeout(function () {
                $('#preloader').fadeOut('slow', function () {
                    $(this).remove();
                });
            }, 500);




            let intDuration = 5000;
            setInterval(
                function(){
                    $('.event-item-highlight').animate({"font-size": "+=3px"},1000).delay(0)
                        .animate({"font-size": "-=3px"},1000);
                },
                intDuration
            );




        }
    });



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
        if ((UNIX_timestamp - TimeNowMilliSeconds) < 86400000 ) {
            var timestr = '    ' + hours.toString() + ':'  + minutes.substr(-2)
        }
        else {
            var timestr = '    ' + day.toString() + '/' + month + /*+ year.toString();*/'  -  ' + hours.toString() + ':'  + minutes.substr(-2)
        }

        // Display date time in MM-dd-yyyy h:m:s format
       /*
        var convdataTime = month + '-' + day + '-' + year + '  ' + hours + ':' + minutes.substr(-2);
        var lowercase = convdataTime;
        */
        return timestr;

    }

});
