
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
// keep score
localStorage.setItem('red', '0');
localStorage.setItem('blue','0');
var round=0;
var bpoint=0;
var rpoint=0;



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
	if(p1IsAt >= 1350) {rpoint++; announcer("Red Ship");}//alert("Red Laser Win!");}
	if(p2IsAt >= 1350) {bpoint++;announcer("Blue Ship"); }//alert("Blue Laser Win! "+ );}
}




function announcer(winner){
	document.getElementsByTagName('body')[0].removeEventListener("keydown",addMiles);
  var winning_time=document.getElementById('timer').textContent;
   if( round == 3 )	{
		   announce.textContent= (localStorage.getItem('red') > localStorage.getItem('blue'))?
			    " Red Ship is the ultimate winner" : " Blue Ship is the ultimate winner";

	  }
   else{
		  announce.textContent=winner +" Wins in "+ winning_time ;}

  document.getElementById('playground').appendChild(announce);
  (winner == 'Red Ship')? localStorage.setItem('red',rpoint.toString()):localStorage.setItem('blue',bpoint.toString());
 	document.getElementsByClassName('team-red')[0].textContent="Red ship: "+localStorage.getItem('red');
	document.getElementsByClassName('team-blue')[0].textContent="Blue ship: "+localStorage.getItem('blue');


}



  var totalSeconds = 0;
	var timer= document.getElementById('timer');
/// timer
function startTime(flag) {
	if(flag == 'reset'){
	  	 clearInterval(setTime);
      document.getElementById('timer').innerHTML="00 : 00";
	}
	else{
		round++;
    document.getElementById('start').style.visibility="hidden";
		document.getElementById('timer').style.visibility="visible";
	  document.getElementsByTagName('body')[0].addEventListener("keydown",addMiles);
		totalSeconds = 0;
    setInterval(setTime, 1000);
 }
}

function setTime()
{   var current=0;
		++totalSeconds;
	timer.innerHTML= pad(parseInt(totalSeconds/60))+" : "+   pad(totalSeconds%60);

	function pad(val)
	{
			var valString = val + "";
	  	return 	(valString.length < 2)?   "0" + valString : valString;

	}
}



function resetGame(){
           document.getElementById('start').style.visibility="visible";
					 document.getElementById('timer').style.visibility="hidden";
					 startTime('reset');
					 	player1.style.left="0px";
						player2.style.left="0px";
						p1IsAt = 0;
						p2IsAt = 0;
						if(document.getElementById('playground').lastChild.className =='announce')
					  document.getElementById('playground').removeChild(announce);
						if(round > 3){round=0;
								bpoint=0;
								rpoint=0;
								localStorage.setItem('red','0');
								localStorage.setItem('blue','0');
									document.getElementsByClassName('team-red')[0].textContent="0";
									document.getElementsByClassName('team-blue')[0].textContent="0";
						}
}
