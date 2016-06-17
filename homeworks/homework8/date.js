var date1 = new Date(),
date2 = new Date(2016, 5, 17);

compare(date2, date1);

function compare(date1, date2) {
	if(date1.getTime() > date2.getTime())
		alert("Первая дата позже второй.");
	else if (date1.getTime() == date2.getTime())
		alert("Даты одинаковы.");
	else
		alert("Вторая дата позже первой.");
}
