function testGS() {

	const url = "https://script.google.com/macros/s/AKfycbwXue2kmkRJ0QIdrPkBsj3mmr_xXaL-IrvczyH4CPAu7PAt_aGBizB3Pg5HUzkhNHbPfg/exec"

	fetch(url)
		.then(d => d.json())
		.then(d => {
			document.getElementById("app").textContent = d[0].status;
		});
}

document.getElementById("btn").addEventListener("click",testGS)