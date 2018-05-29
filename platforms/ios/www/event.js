$(document).ready(function () {

    $('.drawer').drawer();


    /* test! */
    $("#testform").submit(function (event) {
        alert("Handler for .submit() called.");
        event.preventDefault();


        formData = new FormData();
        formData.append('file', $('input[type=file]')[0].files[0]);
        console.log('inputed data');


        $.ajax({
            async: true,
            crossDomain: true,
            url: url + "external/stories/" + id,
            processData: false,
            contentType: false,
            type: 'POST',
            mimeType: "multipart/form-data",
            data: formData,
            success: function (data) {
                alert(data);
                $('body').prepend('<p>formdata sended</p>');
                console.log(data);


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
    var category = getQueryStringValue('category');
    var htmlstring = "";
    var output = document.getElementById("events");
    var urll = url + "external/events/" + id;
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
        url: url + "external/events/" + id,

        dataType: "json",
        success: function (data) {




            /* get bar info */
            /*
            $.ajax({
                type: 'GET',
                crossOrigin: true,
                url: url + "external/events/" + id,
                

                dataType: "json",
                success: function (data) {

                }


            });
            
            */
            var promo = data.promotion.shortName;
            console.log(promo);
            if (!promo || promo == undefined || promo == "" || promo.length == 0 || promo == "GEEN PROMOTIE") {
                    promo = "";
                }
            
            /* adres short: " /*data.place.name*/  

            if ((data.stories.length) > 0) {
                storiesAvailable = true;

                if (category.toLowerCase() === "cafe".toLowerCase()) {
                    console.log('cafe');
                    nextstring = "<div class='event-head'><img class='yellow-circle' src='img/yellow-circle.svg'><img class='icon' src='" + data.icon + "'><div class='event-div'><h2>" + data.title + "</h2><h3><span></span> " + data.place.address + "</h3></div></div><div class='addstory' id='addstory'><h7>CHECK IN AND ADD STORY&nbsp&nbsp<i class='material-icons'>camera_alt</i></h7></div><section class='description-one'><h4>information</h4><h5><h4 class='promo'>" + promo + "</h4></section><section class='description-twoo'><p>" + data.description + "</p><p><a class='link' href=" + data.detailLink + "></a></p><img class='coverphoto' src=" + data.coverPhoto + "></section>";

                    nextstring = "<div class='event-head'><img class='yellow-circle' src='img/yellow-circle.svg'><img class='icon' src='" + data.icon + "'><div class='event-div'><h2>" + data.title + "</h2><h3><span></span> " + data.place.address + "</h3></div></div><div class='addstory' id='addstory'><h7>CHECK IN AND ADD STORY&nbsp&nbsp<i class='material-icons'>camera_alt</i></h7></div><section class='description-one'><h4>information</h4><h4 class='promo'>" + promo + "</h4></section><section class='description-twoo'><p>" + data.description + "</p><p><a class='link' href=" + data.detailLink + "></a></p><img class='coverphoto' src=" + data.coverPhoto + "></section>";

                } else {

                    nextstring = "<div class='event-head'><img class='yellow-circle' src='img/yellow-circle.svg'><img class='icon' src='" + data.icon + "'><div class='event-div'><h2>" + data.title + "</h2><h3><span></span> " + data.place.address + "</h3></div></div><div class='addstory' id='addstory'><h7>CHECK IN AND ADD STORY&nbsp&nbsp<i class='material-icons'>camera_alt</i></h7></div><section class='description-one'><h4>information</h4><h5><i class='material-icons icon-small'>date_range</i> WHEN &nbsp&nbsp&nbsp&nbsp&nbsp" + OnlyDateConverter(data.startTime) + "</h5><h5><i class='material-icons icon-small'>access_time</i> START &nbsp&nbsp&nbsp " + OnlyTimeConverter(data.startTime) + "</h5><h4 class='promo'>" + promo + "</h4></section><section class='description-twoo'><p>" + data.description + "</p><p><a class='link' href=" + data.detailLink + "></a></p><img class='coverphoto' src=" + data.coverPhoto + "></section>";

                    nextstring = "<div class='event-head'><img class='yellow-circle' src='img/yellow-circle.svg'><img class='icon' src='" + data.icon + "'><div class='event-div'><h2>" + data.title + "</h2><h3><span></span> " + data.place.address + "</h3></div></div><div class='addstory' id='addstory'><h7>CHECK IN AND ADD STORY&nbsp&nbsp<i class='material-icons'>camera_alt</i></h7></div><section class='description-one'><h4>information</h4><h5><i class='material-icons icon-small'>date_range</i> WHEN &nbsp&nbsp&nbsp&nbsp&nbsp" + OnlyDateConverter(data.startTime) + "</h5><h5><i class='material-icons icon-small'>access_time</i> START &nbsp&nbsp&nbsp " + OnlyTimeConverter(data.startTime) + "</h5><h4 class='promo'>" + promo + "</h4></section><section class='description-twoo'><p>" + data.description + "</p><p><a class='link' href=" + data.detailLink + "></a></p><img class='coverphoto' src=" + data.coverPhoto + "></section>";
                }
                /* story array */
                var story_url_load_array = data.stories;

            } else {
                storiesAvailable = false;
                if (category.toLowerCase() === "cafe".toLowerCase()) {
                    nextstring = "<div class='event-head'><img class='icon' src='" + data.icon + "'><div class='event-div'><h2>" + data.title + "</h2><h3><span><span> " + data.place.address + "</h3></div></div><div  class='addstory' id='addstory'><h7>CHECK IN AND ADD STORY&nbsp&nbsp<i class='material-icons'>camera_alt</i></h7></div><section class='description-one'><h4>information</h4><h4 class='promo'>" + promo + "</h4></section><section class='description-twoo'><p>" + data.description + "</p><p><a class='link' href=" + data.detailLink + "></a></p><img class='coverphoto' src=" + data.coverPhoto + "></section>";



                } else {
                    nextstring = "<div class='event-head'><img class='icon' src='" + data.icon + "'><div class='event-div'><h2>" + data.title + "</h2><h3><span><span> " + data.place.address + "</h3></div></div><div  class='addstory' id='addstory'><h7>CHECK IN AND ADD STORY&nbsp&nbsp<i class='material-icons'>camera_alt</i></h7></div><section class='description-one'><h4>information</h4><h5><i class='material-icons icon-small'>date_range</i> WHEN &nbsp&nbsp&nbsp&nbsp&nbsp" + OnlyDateConverter(data.startTime) + "</h5><h5><i class='material-icons icon-small'>access_time</i> START &nbsp&nbsp&nbsp " + OnlyTimeConverter(data.startTime) + "</h5><h4 class='promo'>" + promo + "</h4></section><section class='description-twoo'><p>" + data.description + "</p><p><a class='link' href=" + data.detailLink + "></a></p><img class='coverphoto' src=" + data.coverPhoto + "></section>";
                }

            }




            htmlstring += nextstring;
            output.innerHTML = htmlstring;

            setTimeout(function () {
                $('#preloader').fadeOut('slow', function () {
                    $(this).remove();
                    $('#back-arrow').click(function () {
                        window.location.href = 'overview.html';
                    });
                });
            }, 0);

            $(".yellow-circle").click(function () {
                console.log("open stories");

                if (storiesAvailable) {


                    /* show stories */

                    var htmloutput = '<div id="confirm-image"><img id="back-arrow" class="noSelect" src="img/back-arrow.svg"><div id="send-image"><h7></h7></div><div class="centerimage"><img id="story-image" src=""></div></div>';
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


                    $('#send-image, #story-image').click(function () {
                        console.log("next");
                        console.log(data.stories[i]);
                        if (data.stories.length == 1) {
                            $('#confirm-image').remove();
                        } else {
                            i = i + 1;


                            if (data.stories.length > PreloadedImages.length) {
                                /* if image is not loaded yet */
                                var newsrc = (data.stories[i]);

                                $("#story-image").attr("src", newsrc);



                            } else if (story_url_load_array.length <= i) {
                                /* all storys seen */
                                $('#confirm-image').remove();

                            } else if (data.stories.length <= PreloadedImages.length) {
                                /* if image is loaded */
                                document.getElementById('story-image').src = PreloadedImages[i].src;
                                console.log("ready2: " + PreloadedImages[i].src);

                            }
                        }




                    });

                }

            });
            
            

            let app = {
                init: function () {
                    console.log(document.getElementsByTagName(".addstory"));
                    /* document.getElementById('addstory')*/
                    document.getElementById("addstory").addEventListener('click', app.takephoto);
                },
                takephoto: function () {
                    let opts = {
                        quality: 80,
                        x: 0,
                        y: 0,
                        width: window.screen.width,



                        destinationType: Camera.DestinationType.DATA_URL,
                        sourceType: Camera.PictureSourceType.CAMERA,
                        mediaType: Camera.MediaType.PICTURE,
                        encodingType: Camera.EncodingType.JPEG,
                        cameraDirection: Camera.Direction.BACK,
                        mediaType: Camera.MediaType.ALLMEDIA,
                        targetWidth: 1080,
                        targetHeight: 1920,



                    };

                    navigator.camera.getPicture(app.ftw, app.wtf, opts);


                },
                ftw: function (imageData) {
                    $('body').prepend('<div id="preloader"></div>');
                    /*document.getElementById('msg').textContent = imgURI;*/


                    /* document.getElementById('photo').src = imgURI; 
                    alert('picture taken, ready to send to server');
                            
                    */

                    var htmloutput = '<div id="confirm-image"><div id="send-image"><h7>Add story</h7></div><img id="story-image-add" src="data:image/jpeg;base64,' + imageData + '"></div>';
                    $('body').prepend(htmloutput);


                    setTimeout(function () {
                        $('#preloader').fadeOut('slow', function () {
                            $(this).remove();
                        });
                    }, 500);





                    $('#confirm-image').click(function () {
                        $('#send-image h7').html('Sending data...');







                        /*  $('body').prepend('<p>' + imgURI + '</p>');*/

                        /*

                        formData = new FormData();
                        var blobfile = dataURItoBlob(imgURI);
                        console.log(imgURI);
                        console.log(blobfile);
                        formData.append('file', blobfile);


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

                                $('body').prepend('<p>formdata sended</p>');


                            },
                            error: function (request, error) {


                                alert(" error: Can't do because: " + request.responseText);
                               
                            }
                        });


                        */

                        // Get the form element withot jQuery
                        var form = document.getElementById("myAwesomeForm");

                        var ImageURL = "data:image/jpeg;base64," + imageData;
                        // Split the base64 string in data and contentType
                        var block = ImageURL.split(";");
                        // Get the content type of the image
                        var contentType = block[0].split(":")[1]; // In this case "image/gif"
                        // get the real base64 content of the file
                        var realData = block[1].split(",")[1]; // In this case "R0lGODlhPQBEAPeoAJosM...."

                        // Convert it to a blob to upload
                        var blob = b64toBlob(realData, contentType);

                        // Create a FormData and append the file with "image" as parameter name
                        var formDataToUpload = new FormData(form);
                        formDataToUpload.append("file", blob);


                        $.ajax({
                            async: true,
                            crossDomain: true,
                            url: url+"external/stories/" + id,
                            data: formDataToUpload, // Add as Data the Previously create formData
                            type: "POST",
                            contentType: false,
                            processData: false,
                            cache: false,
                            mimeType: "multipart/form-data", // Change this according to your response from the server.
                            error: function (err) {
                                console.error(err);
                            },
                            success: function (data) {
                                console.log(data);
                                console.log("succesfull image sended");

                                location.reload();

                            },
                            complete: function () {
                                console.log("Request finished.");
                            }
                        });

                        /* test */



                        function b64toBlob(b64Data, contentType, sliceSize) {
                            contentType = contentType || '';
                            sliceSize = sliceSize || 512;

                            var byteCharacters = atob(b64Data);
                            var byteArrays = [];

                            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                                var slice = byteCharacters.slice(offset, offset + sliceSize);

                                var byteNumbers = new Array(slice.length);
                                for (var i = 0; i < slice.length; i++) {
                                    byteNumbers[i] = slice.charCodeAt(i);
                                }

                                var byteArray = new Uint8Array(byteNumbers);

                                byteArrays.push(byteArray);
                            }

                            var blob = new Blob(byteArrays, {
                                type: contentType
                            });
                            return blob;
                        }


                        /*
                        formData = new FormData();
                        var blob = dataURItoBlob(imgURI);
                        formData.append('file', 'img/splashscreen.png');

                        $.ajax({
                            async: true,
                            crossDomain: true,
                            url: "https://on-the-moment-dev.herokuapp.com/external/stories/evt-6462ccc0-626c-4b58-b966-7b20e70d252a",
                            processData: false,
                            contentType: false,
                            type: 'POST',
                            mimeType: "multipart/form-data",
                            data: formData,
                            success: function (data) {
                                alert(data);
                                $('body').prepend('<p>data send succes</p>');


                            },
                            error: function (xhr, ajaxOptions, thrownError) {
                                alert(xhr.status);
                                alert(thrownError);
                                $('body').prepend('<p>Error sending data to server</p>');
                            }
                        });
                        */




                        /*

                        var blob = dataURItoBlob(imgURI);

                        var form = new FormData();
                        form.append("file", imgURI);

                        var settings = {
                            "async": true,
                            "crossDomain": true,
                            "url": "https://on-the-moment-dev.herokuapp.com/external/stories/evt-6462ccc0-626c-4b58-b966-7b20e70d252a",
                            "method": "POST",
                            "processData": false,
                            "contentType": false,
                            "mimeType": "multipart/form-data",
                            "data": form
                        }

                        $.ajax(settings).done(function (response) {
                            console.log(response);
                            $('body').prepend('<p>succes!</p>');
                        });

                        $.ajax(settings).error(function (request, status, error) {
                            alert(request.responseText);
                            alert(.responseText);
                            
                        });

    */



                        /* https://on-the-moment-dev.herokuapp.com/external/stories/evt-6462ccc0-626c-4b58-b966-7b20e70d252a */


                    });








                },
                wtf: function (msg) {
                    document.getElementById('msg').textContent = msg;
                }
            };
            document.addEventListener('deviceready', app.init);

            /* preloader */

            preload(story_url_load_array);


        }
    });

    /* unix time to human read time */
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







        var timestr = '    ' + day.toString() + '/' + month + /*+ year.toString();*/ '  -  ' + hours.toString() + ':' + minutes.substr(-2)


        // Display date time in MM-dd-yyyy h:m:s format
        /*
         var convdataTime = month + '-' + day + '-' + year + '  ' + hours + ':' + minutes.substr(-2);
         var lowercase = convdataTime;
         */
        return timestr;

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
        var date = new Date(UNIX_timestamp);
        var months_arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        // Year
        var year = date.getFullYear();

        // Month
        var month = months_arr[date.getMonth()];

        // Day
        var day = date.getDate();

        var conv = day + ' ' + month + ' ' + year;
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

    function gohome() {
        location.href = "index.html"
    }


    function dataURItoBlob(dataURI) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        var byteString;

        if (dataURI.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(dataURI.split(',')[1]);
        else
            byteString = unescape(dataURI.split(',')[1]);

        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

        // write the bytes of the string to a typed array
        var ia = new Uint8Array(byteString.length);

        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        return new Blob([ia], {
            type: mimeString
        });
    }


    

});