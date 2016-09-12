

document.getElementById('start').addEventListener('click',startTime);
document.getElementById('timer').textContent="00 : 00";
document.getElementsByClassName('scores')[0];
var player1 = document.getElementById('p1');
var player2 = document.getElementById('p2');
var p1IsAt = 0;
var p2IsAt = 0;




function addMiles(e){

	//console.log("running")
	if(e.keyCode == 38) {
		p1IsAt+=15;
		console.log( p1IsAt);
		player1.style.left=p1IsAt.toString()+"px";
		//console.log("playerf1");

		scoreCheck();
	}
	if(e.keyCode == 40){
		p2IsAt+=15;
		player2.style.left=p2IsAt.toString()+"px";
		//console.log("player2")

		scoreCheck();
	}

}

function scoreCheck(){
	if(p1IsAt >= 1350) {announcer("Red Ship"); }//alert("Red Laser Win!");}
	if(p2IsAt >= 1350) {announcer("Blue Ship"); }//alert("Blue Laser Win! "+ );}
}




function announcer(winner){

  var winning_time=document.getElementById('timer').textContent;
	var announce=document.createElement('div');
	announce.style.background="#fff";
	announce.style.width="500px";
	announce.style.margin="0 auto";
	announce.style.zIndex="10";
	announce.textContent= winner +" win in "+ winning_time ;
  document.getElementById('playground').appendChild(announce);



}




/// timer
function startTime() {
  document.getElementById('start').style.visibility="hidden";
	document.getElementsByTagName('body')[0].addEventListener("keydown",addMiles);
	var timer= document.getElementById('timer');
	        var totalSeconds = 0;
	        setInterval(setTime, 1000);

	        function setTime()
	        {
	            ++totalSeconds;
	        ;
	          timer.innerHTML = pad(parseInt(totalSeconds/60))+" : "+   pad(totalSeconds%60);
	        }


}
function pad(val)
{
		var valString = val + "";
		if(valString.length < 2)
		{
				return "0" + valString;
		}
		else
		{
				return valString;
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
