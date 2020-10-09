$(document).ready(function(){
    $('#submitWeather').click(function(){

        let city = $('#city').val();
        if(city != ''){

            $.ajax({
                url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&appid=63e8326535e7a9753880304fb11ac4f3",
                type:"POST",
                dataType:"jsonp",
                success: function(data){
                    console.log(data);
                    let widget = show(data);
                    $("#show").html(widget);
                    $('#city').val('');
                }
              
            });

        }else{
            $('#error').html("<div class='alert alert-danger' id='errorCity'><a href = '#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Field can not be empty</div>");
        }
    });
});

function show(data) {
    return  "<h3 style='text-align: center'>Current Weather for " + data.name + ", " + data.sys.country + "</h3>" +
            "<h4><strong>Weather</strong>: "+ data.weather[0].main +"</h4>" + 
            "<h4><strong>Description</strong>: <img src='http://openweathermap.org/img/w/" +data.weather[0].icon+".png'> " + data.weather[0].description +"</h4>" +
            "<h4><strong>Temperature</strong>: " + data.main.temp + "&deg;C</h4>" +
            "<h4><strong>Pressure</strong>: " + data.main.pressure + "hPa</h4>" +
            "<h4><strong>Humidity</strong>: " + data.main.humidity + "%</h4>" +
            "<h4><strong>Min. Temperature</strong>: " + data.main.temp_min + "&deg;C</h4>" +
            "<h4><strong>Max. Temperature</strong>: " + data.main.temp_max + "&deg;C</h4>" +
            "<h4><strong>Wind Speed</strong>: " + data.wind.speed + "m/s</h4>" +
            "<h4><strong>Wind Direction</strong>: " + data.wind.deg + "&deg;C</h4>";

}

