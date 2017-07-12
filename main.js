/**
 * Created by Luka on 11. 07. 2017.
 */
$(document).ready(function(){

    var long;
    var lat;
    var kTemp;
    var fTemp;
    var cTemp;
    var tempSwap = true;

    // get the position of user
    if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
        long = position.coords.longitude;
        lat = position.coords.latitude;

        // get the json for users geolocation
        var api = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&APPID=0fa4f697d72b1a4616a02c99f798df9c";

        $.getJSON(api, function(data) {
            var weatherType = data.weather[0].description;
            var kTemp = data.main.temp;
            var windSpeed = data.wind.speed;
            var city = data.name;

            fTemp = (kTemp*(9/5)- 459.67).toFixed(1);
            cTemp = (kTemp - 273).toFixed(1);

            $(".city").html(city);
            $(".description").html(weatherType);
            $(".wind-speed").html(windSpeed + " m/s");
            $(".temperature").html(fTemp + " &#8457;");

            $(".temperature").click(function() {
                if (tempSwap===false) {
                    $(".temperature").html(cTemp + " &#8451;");
                    tempSwap = true;
                } else {
                    $(".temperature").html(fTemp + " &#8457;");
                    tempSwap = false;
                }
            });


            
    });


    });
  }


});