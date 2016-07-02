var timeElem = $("#time"), 
	timeStart = $("#start"), 
	timeReset = $("#reset");

function startTime() { 
	var interval = setInterval(function() {
		var date = new Date();
		var hours = date.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds();
		if (hours < 10) hours = "0" + hours;
		if (minutes < 10) minutes = "0" + minutes;
		if (seconds < 10) seconds = "0" + seconds;
		timeElem.html(hours + ":" + minutes + ":" + seconds);
	}, 1000);
	timeReset.on("click", function() {
		return resetTime(interval);
	});
}

function resetTime(interval) {
	clearInterval(interval);
	timeElem.html("00:00:00");
}

timeStart.on("click", function() {
	return startTime();
});