$(document).ready(function () {


    $('.drawer').drawer();

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
    var htmlstring;
    var output = document.getElementById("events");

    $.ajax({
        type: 'GET',
        crossOrigin: true,
        url: "https://on-the-moment-dev.herokuapp.com/external/events/upcoming",

        dataType: "json",
        success: function (data) {
            $.each(data, function (index, element) {
                console.log(element.title);



                nextstring = "<div class='event-item'><img class='icon' src='img/icons/unnamed.png' alt='undifined'><div class='event-div'><h2>" + element.title + "</h2><h3>" + element.place.name + "</h3><div class='event-div-info'><h4>" + element.startTime + "</h4><h5> promotion undif</h5></div></div></div>";

                htmlstring += nextstring;




            });
            output.innerHTML = htmlstring;
        }
    });



});