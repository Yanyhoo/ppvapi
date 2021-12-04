function testGS() {

	const url = "https://script.google.com/macros/s/AKfycbz31vAWCc9mx95dfJjsIghRa4KyN9OwJG3dQvPDs130i6qr9wr5pgSNHp4hV0igIe2s/exec"

	fetch(url)
		.then(d => d.json())
		.then(d => {
			document.getElementById("app").textContent = d[0].status;
		});
}

document.getElementById("btn").addEventListener("click",testGS)
