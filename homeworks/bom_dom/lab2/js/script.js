function topMenuElements() {	
	var elements = document.getElementsByTagName("ul")[0].getElementsByTagName("a");
	// var aElements = ulElements[0].getElementsByTagName("a");
	for (var i = 0; i < elements.length; i++) {
		console.log(elements[i].innerHTML);
	}
}

topMenuElements();

function sideMenuElements() {	
	var elements = document.getElementsByTagName("ul")[1].children;
	for (var i = 0; i < elements.length; i++) {
		console.log(elements[i].children[0].innerHTML)
	} 
}

sideMenuElements();

var imgSrc = document.getElementsByTagName("img")[0].src;
console.log(imgSrc);

var copy = document.getElementsByTagName("ul")[2].lastElementChild.innerHTML;
console.log(copy);

