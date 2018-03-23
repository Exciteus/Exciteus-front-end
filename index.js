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






    /*
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
            */
    /*

            var treeData;
            var requestURL = 'testdata.json';

            var oReq = new XMLHttpRequest();

            oReq.open("get", requestURL);
            oReq.responseType = 'json';
            oReq.onload = reqListener;
            oReq.send();

            function reqListener(e) {

                var response = oReq.response;
                outputJSON(response);
                console.log(response);


            }

            function outputJSON(e) {
                var obj = JSON.parse(e);
            }
            
            

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            console.log(myObj);
        }
    };
    xmlhttp.withCredentials = true; 
    xmlhttp.open("GET", "testdata.json", true);
    xmlhttp.send();
*/


    function logResults(json) {
        console.log(json);
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
                
                
                 
                nextstring= "<div class='event-item'><img class='icon' src='undifined' alt='undifined'><div class='event-div'><h2>" + element.title +"</h2><h3>" + element.place.name +"</h3><div class='event-div-info'><h4>" + element.startTime +"</h4><h5> promotion undif</h5></div></div></div>";
                
                htmlstring += nextstring;
                
                
                
             
            });
            output.innerHTML = htmlstring;
        }
    });



});



/*
[
	{
		"title": "test-event-3",
		"category": "TD",
		"place": {
			"name": "Alma 100"
		},
		"startTime": 1521831294290
	},
	{
		"title": "test-event-5",
		"category": "TD",
		"place": {
			"name": "Alma 2"
		},
		"startTime": 1521831597558
	},
	{
		"title": "admin-test-event-1",
		"category": "TD",
		"place": {
			"name": "Alma 2"
		},
		"startTime": 1521832016304
	},
	{
		"title": "admin-test-event-2",
		"category": "TD",
		"place": {
			"name": "Alma 2"
		},
		"startTime": 1521832016304
	},
	{
		"title": "admin-test-event-3",
		"category": "TD",
		"place": {
			"name": "Alma 2"
		},
		"startTime": 1521832072814
	},
	{
		"title": "test-event-4",
		"category": "TD",
		"place": {
			"name": "Alma 99"
		},
		"startTime": 1521917799540
	},
	{
		"title": "test-event-stag-admin",
		"category": "TD",
		"place": {
			"name": "Dulci"
		},
		"startTime": 1522174511600
	},
	{
		"title": "test-event-1-long-title",
		"category": "TD",
		"place": {
			"name": "Alma 2"
		},
		"startTime": 1522620000000
	}
]
*/