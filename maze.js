
//"use strict";

window.onload = function(){

	maze = document.getElementById("maze");
	status = document.getElementById("status");
	start = document.getElementById("start");
	end = document.getElementById("end");
	boundaries = document.querySelectorAll(".boundary:not(.example)");

	touchedBoundary = false;
	started = false;


//Function that checks if any wall was touched; determines game over
	function touched(){
		for ( b= 0; b<boundaries.length ; b++){ 
			if (boundaries[b].classList.contains("youlose")){
				touchedBoundary = true;
			} 
		}
	}

//Function that changes all walls red for game over
	function instant(){
		for ( b=0; b<boundaries.length ; b++){
			boundaries[b].addEventListener("mouseover", function(element){
				for ( b=0; b<boundaries.length ; b++)
				boundaries[b].classList.add("youlose");
				status = document.getElementById("status").innerHTML = "You have Lost. Click S to start over."
				//boundaries[b].removeListener();
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


//Determines if user has started the game
	start.onmouseover = function(){
		started =true;
	}

//
	maze.onmouseleave = function(){
		if (started === true){
			for ( b=0; b<boundaries.length ; b++){
				for ( b=0; b<boundaries.length ; b++){
					boundaries[b].classList.add("youlose");
					status = document.getElementById("status").innerHTML = "That's Cheating. Click S to start over."
					//maze.removeListener();
				}
			}
		}
	}

//EventListener that reloads the game
	start.addEventListener("click", function(){
		location.reload();
	})

//EventListener that checks and shows if game was won
	end.addEventListener("mouseover", function(e){
		//to prevent premature win - does not work
		/*if (started === false){
			status = document.getElementById("status").innerHTML = "That's Cheating. Click S to start over."
		}*/

		if ( touchedBoundary  == false){
			status = document.getElementById("status").innerHTML = "You Win !!"
			//end.removeListener();
		}

	})
}

