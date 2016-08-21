$(document).ready(function() {
	var api = 'http://api.openweathermap.org/data/2.5/weather';
	var appId = '7a607b08dbb6ad1cee2d8b962c07cfbe';
	var widget = $('#weather_widget');

	$('#get_weather').on('click', weather);
	$('#city').on('keypress', function(e) {
		if (e.which == 13)
			return weather();
	});

	function weather() {
		$.ajax({
			method: 'GET',
			url: api + '?APPID=' + appId + '&q=' + $('input[name="city"]').val() + '&units=metric'
		})
		.done(function(msg) {
			widget.empty();
			if (msg.cod !== 200) {
				widget.html(msg.cod + " " + msg.message).addClass('margin_top');
				$('#map').css('display', 'none');
			}
			else {
				console.log(msg);
				widget.empty();
				var result = {
					city : msg.name,
					country : msg.sys.country,
					coord_lat : msg.coord.lat,
					coord_lon : msg.coord.lon,
					humidity : msg.main.humidity,
					pressure : msg.main.pressure,
					temp : msg.main.temp,
					date : msg.dt,
					sunrise : msg.sys.sunrise,
					sunset : msg.sys.sunset,
					description : msg.weather[0].main,
					extDescription : msg.weather[0].description,
					icon : msg.weather[0].icon,
					wind : msg.wind.speed
				}
				var date = new Date(result.date * 1000);
				var sunrise = new Date(result.sunrise * 1000);
				var sunset = new Date(result.sunset * 1000);
				var iconUrl = 'http://openweathermap.org/img/w/' + result.icon + '.png';

				function format(date) {
					var hours = date.getHours();
					if (hours < 10) hours = '0' + hours; 
					var minutes = date.getMinutes(); 
					if (minutes < 10) minutes = '0' + minutes; 
					var month = date.getMonth() + 1;
					if (month < 10) month = '0' + month; 
					var day = date.getDate();
					if (day < 10) day = '0' + day; 
					var year = date.getFullYear();
					var formatDate = {
						time : hours + ':' + minutes,
						date : day + '.' + month + '.' + year
					}
					return formatDate;
				}

				var dateTime = format(date);
				var sunrizeTime = format(sunrise);
				var sunsetTime = format(sunset);

				widget.addClass('margin_top');
				widget.append('<p>' + result.city + ', ' + result.country + '</p>');
				widget.append('<p>' + '<img src=" ' + iconUrl  +' ">' + ' ' + Math.round(result.temp) + '&deg;С</p>');
				widget.append('<p>' + result.description + '</p>');
				widget.append('<p>get at ' + dateTime.time + ' ' + dateTime.date + '</p>');
				widget.append('<p>Wind: ' + result.wind +' m/s</p>');
				widget.append('<p>Cloudiness: ' + result.extDescription +'</p>');
				widget.append('<p>Pressure: ' + result.pressure +' hpa</p>');
				widget.append('<p>Humidity: ' + result.humidity +'%</p>');
				widget.append('<p>Sunrise: ' + sunrizeTime.time + '</p>');
				widget.append('<p>Sunset: ' + sunsetTime.time + '</p>');
				widget.append('<p>Geo coords: [' + result.coord_lat + ', ' + result.coord_lon  + ']</p>');

				$('#map').css('display', 'block');
				initMap(result.coord_lat, result.coord_lon);
			}
		})
		.fail(function(msg) {
			widget.html(msg.status + ": " + msg.statusText).addClass('margin_top');
		});
	}


	var map, lat, lng;
	function initMap(lat, lon) {
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: lat, lng: lon},
			zoom: 8
		});
	}
});
