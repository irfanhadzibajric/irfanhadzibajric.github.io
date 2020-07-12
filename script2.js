tog2 = document.getElementById("toggle2");
body2 = document.getElementById("tijelo2");
a5 = document.getElementById("a5");
nav2 = document.getElementById("nav2");

nav2.style.background= "#f9d56e";

vr2 = tog2.value;


function promjenaBoje2(){
	

	if (vr2 === "on"){
		body2.style.background = "#1b1b2f";
		body2.style.color = "#fff"
		a5.style.color = "#fff";
		nav2.style.background = "#e43f5a";
		vr2="off";
	}

	else{
		body2.style.background = "#f3ecc2";
		body2.style.color = "#000"
		a5.style.color = "#000";
		nav2.style.background= "#f9d56e";
		vr2 = "on";

	}
}

tog2.addEventListener("click", promjenaBoje2)

