
document.getElementsByTagName('body')[0].addEventListener("keydown",scoreCheck);
var player1= document.getElementById('p1');
var player2= document.getElementById('p2');
var p1IsAt=0;
var p2IsAt=0;




function scoreCheck(e){

	//console.log("running")
	if(e.keyCode == 38) {
		p1IsAt+=10;
		console.log( p1IsAt);
		player1.style.left=p1IsAt.toString()+"px";
		//console.log("playerf1");
	}
	if(e.keyCode == 40){
		p2IsAt+=10;
		player2.style.left=p2IsAt.toString()+"px";
		//console.log("player2")
	}

}






// //save scores
// //add one point for every 5 press key
// //winner should reach 100 points


// //arrow keys are only triggered by onkeydown, not onkeypress
// // left = 37
// // up = 38
// // right = 39
// // down = 40

//             alert('down');
//             break;
//     }
// };