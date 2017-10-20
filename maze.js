
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
				status = document.getElementById("status").innerHTML = "You have Lost"
				touchedBoundary = true;
			} 
		}
	}

	function instant(){
		for ( b=0; b<boundaries.length ; b++){
			boundaries[b].addEventListener("mouseover", function(element){
				for ( b=0; b<boundaries.length ; b++)
				boundaries[b].classList.add("youlose");
				status = document.getElementById("status").innerHTML = "You have Lost"

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

	end.addEventListener("mouseover", function(e){
		if ( touchedBoundary  == false){
			alert( "You win!" );
		}
	})
}

