tog = document.getElementById("toggle");
body = document.getElementById("tijelo");
a1 = document.getElementById("a1");
a2 = document.getElementById("a2");
a3 = document.getElementById("a3");
a4 = document.getElementById("a4");
a7 = document.getElementById("a7");
a8 = document.getElementById("a8");
nav = document.getElementById("nav");
proj1 = document.getElementById("proj1");
proj2 = document.getElementById("proj2");
proj1.style.background = "#ba7967";
proj2.style.background = "#ba7967";
nav.style.background= "#f9d56e";

vr = tog.value;


function promjenaBoje(){
	
	console.log("click")
	if (vr === "on"){
		body.style.background = "#1b1b2f";
		body.style.color = "#fff"
		a1.style.color = "#fff";
		a2.style.color = "#fff";
		a3.style.color = "#fff";
		a4.style.color = "#fff";
		a7.style.color = "#fff";
		a8.style.color = "#fff";
		nav.style.background = "#e43f5a";
		proj1.style.background = "#b83b5e";
		proj2.style.background = "#b83b5e";

		
		vr="off";
	}

	else{
		body.style.background = "#f3ecc2";
		body.style.color = "#000"
		a1.style.color = "#000";
		a2.style.color = "#000";
		a3.style.color = "#000";
		a4.style.color = "#000";
		a7.style.color = "#000";
		a8.style.color = "#000";
		nav.style.background= "#f9d56e";
		proj1.style.background = "#ba7967";
		proj2.style.background = "#ba7967";
		vr = "on";

	}
}

tog.addEventListener("click", promjenaBoje)


function weather(){
	window.location.href = "weather.html";
}

function adminDeveloper(){
	window.location.href = "adminDeveloper.html";
}