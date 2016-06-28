var clockElem = $("#clock h2")[0], clockStart = $("#start")[0], clockReset = $("#reset")[0];

function startTime() { 
	var interval = setInterval(function() {
		var date = new Date();
		var hours = date.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds();
		if (hours < 10) hours = "0" + hours;
		if (minutes < 10) minutes = "0" + minutes;
		if (seconds < 10) seconds = "0" + seconds;
		clockElem.innerHTML = hours + ":" + minutes + ":" + seconds;
	}, 1000);
	clockReset.addEventListener("click", function() {
		return resetTime(interval);
	});
}

function resetTime(interval) {
	clearInterval(interval);
	clockElem.innerHTML = "00:00:00";
}

clockStart.addEventListener("click", function() {
	return startTime();
});

