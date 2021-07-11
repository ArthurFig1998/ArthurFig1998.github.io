function getData()
{
    var xhttpData = new XMLHttpRequest();
    var url = "http://157.201.194.254/cgi-bin/ercanbracks/mileage/mileageAjaxJSON";

    xhttpData.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var parseData = JSON.parse(this.responseText);
            console.log(parseData);
            ///var trip = parseData.trip;
            document.getElementsById("startCity")[0].value =  parseData.trip.startcity;
            document.getElementsById("startState")[0].value =  parseData.trip.startstate;
            document.getElementsById("endCity")[0].value =  parseData.trip.endcity;
            document.getElementsById("endState")[0].value =  parseData.trip.endstate;

            document.getElementById("demo").innerHTML =  parseData.trip.startcity + ", " + parseData.trip.startstate + ", " + parseData.trip.miles + " miles to " + parseData.trip.endcity + ", " + parseData.trip.endstate + ".";
        }
    };


    xhttpData.open("GET", url, true);
    xhttpData.send();
}
document.addEventListener("DOMContentLoaded", function(event) { getData(); });