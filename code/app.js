
//reset game
//add points
document.getElementById('start').addEventListener('click',startTime);
document.getElementById('reset').addEventListener('click',resetGame);
document.getElementById('timer').textContent="00 : 00";
document.getElementsByClassName('scores')[0];
var announce=document.createElement('div');
announce.setAttribute("class","announce");
var player1 = document.getElementById('p1');
var player2 = document.getElementById('p2');
var p1IsAt = 0;
var p2IsAt = 0;




function addMiles(e){

	//console.log("running")
	if(e.keyCode == 38) {
		p1IsAt+=15;
	//	console.log( p1IsAt);
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
	document.getElementsByTagName('body')[0].removeEventListener("keydown",addMiles);
  var winning_time=document.getElementById('timer').textContent;
	announce.textContent= winner +" Wins in "+ winning_time ;
  document.getElementById('playground').appendChild(announce);



}



  var totalSeconds = 0;
	var timer= document.getElementById('timer');
/// timer
function startTime() {
  document.getElementById('start').style.visibility="hidden";
	document.getElementsByTagName('body')[0].addEventListener("keydown",addMiles);
    controlTimer('run');

}

function setTime()
{
		++totalSeconds;
	timer.innerHTML = pad(parseInt(totalSeconds/60))+" : "+   pad(totalSeconds%60);

	function pad(val)
	{
			var valString = val + "";
	  	return 	(valString.length < 2)?   "0" + valString : valString;

	}
}


function controlTimer(flag){
	(flag === "run")?   setInterval(setTime, 1000): clearInterval(setTime);
}

function resetGame(){
          document.getElementById('start').style.visibility="visible";
          controlTimer("reset");
					 document.getElementById('timer').innerHTML="00 : 00";
					 	player1.style.left="0px";
						player2.style.left="0px";
					  document.getElementById('playground').removeChild(announce);
}
