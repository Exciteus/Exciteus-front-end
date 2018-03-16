$(document).ready(function () {
    $('.drawer').drawer();
    var id = getQueryStringValue('id');

    function getQueryStringValue(key) {
        return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            console.log(id);
            document.getElementById("events").innerHTML = xhttp.responseText;



        }
    };

    xhttp.open("GET", "http://www.exciteus.live/getevent.php?id=" + id, true);
    xhttp.send();

});