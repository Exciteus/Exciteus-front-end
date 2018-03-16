$(document).ready(function () {
    $('.drawer').drawer();

    $(".event-item").click(function () {

        console.log("click");
        window.location.href = "event.html";
    });
    $(".event-item-highlight").click(function () {

        console.log("click");
        window.location.href = "event.html";
    });

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







    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            document.getElementById("events").innerHTML = xhttp.responseText;
            console.log("test");



            $(".event-item").click(function (e) {
                console.log("click");
                var id = this.getAttribute('id');
                console.log(id);
               
                window.location.href = "event.html?id="+ id;
            });
            $(".event-item-highlight").click(function () {

            });


        }
    };

    xhttp.open("GET", "http://www.exciteus.live/getevents2.php", true);
    xhttp.send();




});