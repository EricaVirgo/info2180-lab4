
//"use strict";

window.onload = function(){
	start = document.getElementById("start");
	end = document.getElementById("end");

	boundaries = document.getElementById("boundary1");
	
	boundaries.addEventListener("mouseover", function(element){
		boundaries.classList.add("youlose");
	})
	
	

}


