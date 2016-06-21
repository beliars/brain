for (var key in window) {
	 document.write("<p>" + window[key] + "</p>");
}

document.write("<p>" + "1111111111111" + "</p>");
document.write("<p>" + "2222222222222" + "</p>");

win = window.open("http://www.w3schools.com/", "w3schools", "width=200,height=200");

win.resizeTo(800,500);  

window.scrollTo(0, 0);

setTimeout(function() { 
	win.close(); 
}, 3000); 
