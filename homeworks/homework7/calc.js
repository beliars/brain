var firstNumber = enterFirstNum();
if (firstNumber) 
	var enteredSign = enterSign();
if (enteredSign)
	var secondNumber = enterSecondNum();
if (secondNumber || secondNumber === 0){
	var result = calculate(firstNumber, enteredSign, secondNumber);
	alert("Результат вычисления " + result);
}

function enterFirstNum() {
	var firstNum = 0;
	firstNum = prompt("Введите первое число.", "");
	if (firstNum === "") {
		alert("Вы не ввели значение.");
		return enterFirstNum();
	} 
	else if (firstNum) {
		firstNum = parseFloat(firstNum)
		if (isNaN(firstNum)) {
			alert("Вы ввели не число.");
			return enterFirstNum();
		}
		else return firstNum; 
	}
	else {
		alert("Как хотите.");
		return;
	}
}

function enterSign() {
	var sign = prompt("Введите нужный арифметический знак (должен состоять только из 1 символа (допустимые символы: + - * / %) .", "");
	if (sign === "") {
		alert("Вы не ввели знак.");
		return enterSign();
	} 
	else if (sign) {
		if (sign.length > 1){
			alert("Вы ввели больше 1 символа.");
			return enterSign();
		}
		else if (sign === "+" || sign === "-" || sign === "*" || sign === "/" || sign === "%") 
			return sign;
		else {
			alert("Вы ввели недопустимый символ (допустимые символы: + - * / %).");
			return enterSign();
		}
	}
	else {
		alert("Как хотите.");
		return;
	}
}

function enterSecondNum() {
	var secondNum = prompt("Введите второе число.", "");
	if (secondNum === "") {
		alert("Вы не ввели значение.");
		return enterSecondNum();
	} 
	else if (secondNum) {
		secondNum = parseFloat(secondNum);
		if (isNaN(secondNum)) {
			alert("Вы ввели не число.");
			return enterSecondNum();
		}
		else return secondNum;
	}
	else {
		alert("Как хотите.");
		return;
	}
}

console.log(firstNumber, enteredSign, secondNumber);

function calculate(firstNum, sign, secondNum) {
	var result = 0;
	switch (sign) {
			case "+":
				result = firstNum + secondNum;
				break;
			case "-":
				result = firstNum - secondNum;
				break;
			case "*":
				result = firstNum * secondNum;
				break;
			case "%":
				result = firstNum % secondNum;
				break;
			case "/":
				if (secondNum === 0){
					alert("На 0 делать нельзя.");
				}
				else
					result = firstNum / secondNum;
				break;
			default:
				"Ooops... Не известная ошибка."
				break;
		}	
	return result;
}

