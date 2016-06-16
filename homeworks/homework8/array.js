var i, max, min, res, arr = [], squareArr = [], resArr = [];
min = -100;
max = 100;

res = rand();
alert(res);


function rand(){
	for (i = 0; i < 10; i++){
	 	arr.push(Math.floor(Math.random() * (max-min)) + min);
	 	squareArr.push(arr[i] * arr[i]);
	 	if (squareArr[i] > 100){
	 		resArr.push(squareArr[i]);
	 	}
	}
	return resArr;
}


