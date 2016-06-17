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
	else {
		if (human1.surname > human2.surname) {
			return 1;
		}
		else if(human1.surname < human2.surname){
            return -1;
        }
        else if (human1.surname = human2.surname){
            return 0;
        }
	}
}

console.log(humans.sort(sortObj));