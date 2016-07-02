var form = $(".main_form");

form.on("submit", function(e){
	e.preventDefault();
	var errors = $("p.errors");
	var nameLength = form.find("#name").val().length;
	var surnameLength = form.find("#surname").val().length;

	$(".delegation").on("input", "input", function(e) {
		$(this).removeClass("border_red");
		errors.html("");
	});

	if (nameLength < 2) {
		errors.html("Your name is too short!");
		$("#name").addClass("border_red");
		return;
	}
	if (surnameLength < 2) {
		errors.html("Your surname is too short!");
		$("#surname").addClass("border_red");
		return;
	}
	var age = form.find("#age").val();
	if (age === ""){
		errors.html("You have not entered age!");
		$("#age").addClass("border_red");
		return;
	}
	else 
		age = parseInt(age);
		var ageRegexp = /^(?:1(?:00?|\d)|[2-5]\d|[6-9]\d?)$/;
		var validAge = ageRegexp.test(age);
		if(!validAge){
			errors.html("Incorrect age value!");
			$("#age").addClass("border_red");
			return;
	}
	var email = form.find("#email").val();
	if (email === ""){
		errors.html("You have not entered email!");
		$("#email").addClass("border_red");
		return;
	}
	var emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var validEmail = emailRegexp.test(email);
	if (!validEmail){
		errors.html("Invalid email!");
		$("#email").addClass("border_red");
		return;
	}
	this.submit();
});
