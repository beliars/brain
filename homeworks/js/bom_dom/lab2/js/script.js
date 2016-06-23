var ulElements = document.getElementsByTagName("ul");
var liElement = ulElements[0].firstElementChild;
var topMenuElements = "",
	sideMenuElements = "",
	imgSrc,
	copy;

do{
	if (liElement !== null)
		topMenuElements += liElement.firstElementChild.innerHTML + " ";
	liElement = liElement.nextElementSibling;
}while (liElement !== null);


var elements = ulElements[1].children;
for (var i = 0; i < elements.length; i++) {
	sideMenuElements += elements[i].children[0].innerHTML + " ";
} 

imgSrc = document.getElementsByTagName("img")[0].src;

copy = document.getElementsByTagName("ul")[2].lastElementChild.innerHTML;

console.log("Верхнее меню: " + topMenuElements);
console.log("Боковое меню: " + sideMenuElements);
console.log("Адрес изображения: " + imgSrc);
console.log("Копирайт: " + copy);
