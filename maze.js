
//"use strict";

window.onload = function(){

	status = document.getElementById("status");
	start = document.getElementById("start");
	end = document.getElementById("end");
	boundaries = document.querySelectorAll(".boundary:not(.example)");

	touchedBoundary = false;


	function touched(){
		for ( b= 0; b<boundaries.length ; b++){ 
			if (boundaries[b].classList.contains("youlose")){
				touchedBoundary = true;
			} 
		}
	}

	function instant(){
		for ( b=0; b<boundaries.length ; b++){
			boundaries[b].addEventListener("mouseover", function(element){
				for ( b=0; b<boundaries.length ; b++)
				boundaries[b].classList.add("youlose");
				status = document.getElementById("status").innerHTML = "You have Lost. Click S to start over."

			})
		}
	}


	instant();
	touched();
//Exercise 1 - unnecessary
	//boundary1 = document.getElementById("boundary1");
	//boundary1.addEventListener("mouseover", function(element){
	//	boundary1.classList.add("youlose");
	//})


	start.addEventListener("click", function(){
		location.reload();
	})


	end.addEventListener("mouseover", function(e){
		if ( touchedBoundary  == false){
			status = document.getElementById("status").innerHTML = "You Win !!"
		}
	})
}

