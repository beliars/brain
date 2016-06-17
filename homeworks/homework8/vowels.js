var str = "Посчитать кОличЕство глАсных в строке.";
alert(counter(str));

	function counter(str) {
		var vowels = "аеёиоуыэюя";
   		var count = 0; 
   		for (var i = 0; i < str.length; i++){
        console.log(str[i]);
   			var symbol = str[i].toLowerCase();
   			if (vowels.indexOf(symbol) > -1)
   				count++;
   		}
   		return count;
	}