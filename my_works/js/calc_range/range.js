var min = getNum("минимальное");
if (min)
	var max = getNum("максимальное"); 

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


function getNum(name) {
	var num;
	var num = prompt("Введите " + name + " число.", "");
	if (num === "") {
		alert("Вы не ввели число.");
		return getNum(name);
	} 
	else if (num) {
		if (isNaN(parseInt(num))) {
			alert("Вы ввели не число.");
			return getNum(num);
		}
		else return num; 
	}
	else {
		alert("Как хотите.");
		return;
	}
}