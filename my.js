function testGS() {

	const url = "https://script.google.com/macros/s/AKfycbz31vAWCc9mx95dfJjsIghRa4KyN9OwJG3dQvPDs130i6qr9wr5pgSNHp4hV0igIe2s/exec";

	fetch(url)
		.then(d => d.json())
		.then(d => {
			document.getElementById("app").textContent = d[0].status;
		});
}





function addGS(){

	const url = "https://script.google.com/macros/s/AKfycbz31vAWCc9mx95dfJjsIghRa4KyN9OwJG3dQvPDs130i6qr9wr5pgSNHp4hV0igIe2s/exec";

	fetch(url,{
		
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		mode: 'no-cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'omit', // include, *same-origin, omit
		headers: {
		  'Content-Type': 'application/json'
		},
		redirect: 'follow', // manual, *follow, error
		//referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify({"name":"Martin","surname":"Urner","aeroclub":"Aeroklub Praha Letňany","raceclass":"Klub","glider":"ASW15b","imatriculation":"OK-1985","code":"JJ","email":"UrnerM@seznam.cz","phone":"","Startovné":"ne"}) // body data type must match "Content-Type" header
	  
	});
		
}

document.getElementById("btn2").addEventListener("click",addGS);
document.getElementById("btn").addEventListener("click",testGS);
