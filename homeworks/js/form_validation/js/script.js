var form = $(".main_form")[0];

console.log($(".main_form"));

form.addEventListener("submit", function(e){
	e.preventDefault();
	var errors = $("p.errors")[0];
	var nameLength = form.elements.namedItem("name").value.length;
	var surnameLength = form.elements.namedItem("surname").value.length;

/*Блок для отмены border red и ошибки*/
	$("#name")[0].addEventListener("input", function(e) {
		$("#name").removeClass("border_red");
		errors.innerHTML = "";
	});
	$("#surname")[0].addEventListener("input", function(e) {
		$("#surname").removeClass("border_red");  
		errors.innerHTML = "";
	});
	$("#age")[0].addEventListener("input", function(e) {
		$("#age").removeClass("border_red");  
		errors.innerHTML = "";
	});
	$("#email")[0].addEventListener("input", function(e) {
		$("#email").removeClass("border_red");  
		errors.innerHTML = "";
	});
/*Блок для отмены border red и ошибки*/

	if (nameLength < 2) {
		errors.innerHTML = "Your name is too short!";
		$("#name").addClass("border_red");
		return;
	}
	if (surnameLength < 2) {
		errors.innerHTML = "Your surname is too short!";
		$("#surname").addClass("border_red");
		return;
	}
	var age = form.elements.namedItem("age").value;
	if (age === ""){
		errors.innerHTML = "You have not entered age!"
		$("#age").addClass("border_red");
		return;
	}
	else 
		age = parseInt(age);
		if(isNaN(age)){
			errors.innerHTML = "Incorrect age value!"
			$("#age").addClass("border_red");
			return;
	}
	var email = form.elements.namedItem("email").value;
	var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (email === ""){
		errors.innerHTML = "You have not entered email!"
		$("#email").addClass("border_red");
		return;
	}
	var validEmail = regexp.test(email);
	if (!validEmail){
		errors.innerHTML = "Invalid email!"
		$("#email").addClass("border_red");
		return;
	}
	this.submit();
});
