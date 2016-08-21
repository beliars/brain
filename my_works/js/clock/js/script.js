var timeElem = $("#time"), 
	timeStart = $("#start"), 
	timeReset = $("#reset"),
	stopwatchStart = $("#startStopwatch"),
	stopwatchStop = $("#stopStopwatch"),
	interval,
	seconds = 0;

timeStart.on("click", function() {
	clearInterval(interval);
	startTime();
	interval = setInterval(startTime, 1000);
});

timeReset.on("click", function() {
	clearInterval(interval);
	seconds = 0;
	timeElem.html("00:00:00");
});

stopwatchStart.on("click", function() {
	clearInterval(interval);
	startStopwatch();
	interval = setInterval(startStopwatch, 1000);
});

stopwatchStop.on("click", function() {
	clearInterval(interval);
});

function startTime() { 
	var date = new Date();
	var hours = date.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds();
	if (hours < 10) hours = "0" + hours;
	if (minutes < 10) minutes = "0" + minutes;
	if (seconds < 10) seconds = "0" + seconds;
	timeElem.html(hours + ":" + minutes + ":" + seconds);
}

function startStopwatch() {
	if (seconds < 10) timeElem.html("00:00:0" + seconds);
	else timeElem.html("00:00:" + seconds);
	seconds++;
}