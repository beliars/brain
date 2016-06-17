var john = {name: "John",
			surname: "Smith",
			weight: 80,
			height: 175};
var bill = {name: "Bill",
			surname: "Gates",
			weight: 80,
			height: 175};
var den =  {name: "Den",
			surname: "Brown",
			weight: 80,
			height: 185}; 
var bob =  {name: "Bob",
			surname: "Marley",
			weight: 80,
			height: 170}

var humans = [john, bill, den, bob];

function sortObj(human1, human2) {
	if (human1.height !== human2.height)
    	return human1.height - human2.height;
    var hum1 = human1.surname.toLowerCase();
    var hum2 = human2.surname.toLowerCase();
		if (hum1 > hum2) {
			return 1;
		}
		else if(hum1 < hum2){
            return -1;
        }
        else if (hum1 = hum2){
            return 0;
		}
}

console.log(humans.sort(sortObj));