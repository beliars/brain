var min = enterMin();
if (min)
	var max = enterMax(); 

if (min > max) {
	var tmp = max;
	max = min;
	min = tmp;
}
var arrCheck = [], arrCounter = [];
for (var i = min; i <= max; i++) {
	arrCounter.push(i);
	if (i % 3 === 0 && i % 5 === 0)
		alert("Число " + i + " кратно числам 3 и 5.");
	else if (i % 3 === 0)
		alert("Число " + i + " кратно числу 3.");
	else if (i % 5 === 0)
		alert("Число " + i + " кратно числу 5.");
	else
		arrCheck.push(i);
}

if (max){
	if (arrCounter.length === arrCheck.length)
		alert("В указанном диапазоне нет чисел кратных числам 3 или 5.");
}


function enterMin() {
	var min = prompt("Задайте диапазон чисел. Введите минимальное число.", "");
	if (min === "") {
		alert("Вы не ввели число.");
		return enterMin();
	} 
	else if (min) {
		if (isNaN(parseInt(min))) {
			alert("Вы ввели не число.");
			return enterMin();
		}
		else return min; 
	}
	else {
		alert("Как хотите.");
		return;
	}
}

function enterMax() {
	var max = prompt("Введите максимальное число.", "");
	if (max === "") {
		alert("Вы не ввели число.");
		return enterMax();
	} 
	else if (max) {
		if (isNaN(parseInt(max))) {
			alert("Вы ввели не число.");
			return enterMax();
		}
		else return max; 
	}
	else {
		alert("Как хотите.");
		return;
	}
}
