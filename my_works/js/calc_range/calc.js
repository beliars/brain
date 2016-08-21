var firstNum = getNum("первое");
var sign = emptySign();
var secondNum = getNum("второе");

alert(calculate(firstNum, sign, secondNum));

function getNum(name) {
	var num;
	do{
		num = prompt("Введите " + name + " число.", "");
		if (num === "") {
			alert("Ничего не введено!");
			return getNum(name);
		}
		num = checkNum(num);
	}while (num === false);
	return num;
}

function emptySign(){
	do{
		sign = prompt("Введите арифметический знак (должен состоять из 1 символа (допустимые символы: + - * / %) .", "");
		if (sign === "") 
			alert ("Ничего не введено!");
		console.log
	}while (!sign)
	return sign;
}

function checkNum(num) {
	num = parseFloat(num);
	if(isNaN(num)){
		alert("Вы ввели не число!");
		return false;
	}
	return num;
}

function calculate(firstNum, sign, secondNum) {
	switch (sign) {
		case "+":
		return firstNum + secondNum;
		case "-":
		return firstNum - secondNum;
		case "*":
		return firstNum * secondNum;
		case "%":
		return firstNum % secondNum;
		case "/":
		if (secondNum === 0){
			return "На 0 делить нельзя.";
		}
		else
			return firstNum / secondNum;
		default:
		return "Был введен недопустимый знак: " + sign;
	}	
}