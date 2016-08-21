var properties = "";
for (var property in window) {
	 properties += "<p>" + property + ": " + window[property] + "</p>";
}

document.write(properties);

var win = window.open("http://www.w3schools.com/", "_blank", "width=200,height=200");

win.resizeTo(800,500);  

window.scrollTo(0, 0);

alert(window.navigator.userAgent);

setTimeout(function() { 
	win.close(); 
}, 3000); 
