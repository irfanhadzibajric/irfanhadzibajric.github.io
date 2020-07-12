tog3 = document.getElementById("toggle3");
body3 = document.getElementById("tijelo3");
a6 = document.getElementById("a6");
nav3 = document.getElementById("nav3");

nav3.style.background= "#f9d56e";

vr3 = tog3.value;


function promjenaBoje3(){
	

	if (vr3 === "on"){
		body3.style.background = "#1b1b2f";
		body3.style.color = "#fff"
		a6.style.color = "#fff";
		nav3.style.background = "#e43f5a";
		vr3="off";
	}

	else{
		body3.style.background = "#f3ecc2";
		body3.style.color = "#000"
		a6.style.color = "#000";
		nav3.style.background= "#f9d56e";
		vr3 = "on";

	}
}

tog3.addEventListener("click", promjenaBoje3)

