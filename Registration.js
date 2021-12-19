var registryForm = document.getElementById("registryForm");
var fname = document.getElementById("fname");
var sName = document.getElementById("sName");
var club = document.getElementById("club");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var glider = document.getElementById("glider");
var imat = document.getElementById("imat");
var code = document.getElementById("code");
var gliderClass = document.getElementById("gliderClass");
var submitBtn = document.getElementById("submitBtn");


function afterSubmit(e) {
	e.preventDefault();

	if (registryForm.checkValidity() === false) {
		e.stopPropagation();
		for (let field of registryForm.elements) {
			if (!field.checkValidity()) {
				field.classList.add("is-invalid");
			}
		}
		return;
	}

	for (let field of registryForm.elements) {
		field.classList.remove("is-invalid");
	}

	var info = {
		name: fname.value,
		surname: sName.value,
		aeroclub: club.value,
		email: email.value,
		phone: phone.value,
		glider: glider.value,
		imatriculation: imat.value,
		code: code.value,
		raceclass: gliderClass.value,
	}
	var url = "https://script.google.com/macros/s/AKfycbyw40My6pltrf9HvvUwvyE8JsW02DH5KMPsnAVRe1cXzRGrkE80luxex4RO1-LfNjFf/exec";
	fetch(url, {
		method: 'POST',
		cache: 'no-cache',
		redirect: 'follow',
		body: JSON.stringify(info)

	})
		.then(res => res.json())
		.then(res => {
			console.log(res);
			registryForm.reset();
		})
		.catch(err => {
			console.log(err);
			console.log("Něco se pokazilo na FE");
		})
}

registryForm.addEventListener("submit", afterSubmit);
