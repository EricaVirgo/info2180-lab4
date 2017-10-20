
//"use strict";

window.onload = function(){
	start = document.getElementById("start");
	end = document.getElementById("end");

	boundary1 = document.getElementById("boundary1");
	
	boundary1.addEventListener("mouseover", function(element){
		boundary1.classList.add("youlose");
	})
	
	boundaries = document.querySelectorAll(".boundary:not(.example)");
	for ( b=0; b<boundaries.length ; b++){
		boundaries[b].addEventListener("mouseover", function(element){
		this.classList.add("youlose");
	})
	}
}

