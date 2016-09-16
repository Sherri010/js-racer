
//reset game
//add points
document.getElementById('start').addEventListener('click',startTime);
document.getElementById('reset').addEventListener('click',resetGame);
document.getElementById('how').addEventListener('click',function(){
      document.getElementById('playground').appendChild(instruct);
});
document.getElementById('timer').textContent="00 : 00";
document.getElementsByClassName('scores')[0];
var announce=document.createElement('div');
var instruct=document.createElement('div');
announce.setAttribute("class","announce");


//create obj for players
 function SpaceShip(info){
   this.name=info.name;
   this.time =[];
   this.isAt=0;
   this.scoreBoard=[];
   this.domElement=info.element;
 }

var p1= {name:'red',element: document.getElementById('p1')};
var p2 ={name:'blue',element:document.getElementById('p2')};
var red=new SpaceShip(p1);
var blue=new SpaceShip(p2);
//var blue=new SpaceShip("blue");
console.log(red,blue)



//var player1 = document.getElementById('p1');
//var player2 = document.getElementById('p2');
// var p1IsAt = 0;
// var p2IsAt = 0;
// keep score
// localStorage.setItem('red', '0');
// localStorage.setItem('blue','0');
var round=0;
var bpoint=0;
var rpoint=0;



function howTo(){
instruct.setAttribute('class',"rules");
var btn= document.createElement('button');
btn.addEventListener('click',function(){
  document.getElementById('playground').removeChild(instruct);
});
btn.setAttribute('class','small-bnt');
btn.textContent="Got It";
var p=document.createElement('p');
p.textContent='Use Up arrow to navigate Red Ship and Down arrow for Blue Ship. Each Game is consisted of three race. The ultimate winner should score 2 or higher.';
p.style.textDecoration="none";
instruct.appendChild(p);
instruct.appendChild(btn);

}

howTo();


////////////////////////////////////////////////////////////////////////

function addMiles(e){

	//console.log("running")
	if(e.keyCode == 38) {
		red.isAt=red.isAt+15;
	//	console.log( p1IsAt);
		red.domElement.style.left=red.isAt.toString()+"px";
		//console.log("playerf1");

		scoreCheck();
	}
	if(e.keyCode == 40){
		blue.isAt=blue.isAt + 15;
		blue.domElement.style.left=blue.isAt.toString()+"px";
		//console.log("player2")

		scoreCheck();
	}

}

function scoreCheck(){
	if(red.isAt >= 1350)  {red.scoreBoard.push(1);announcer("Red Ship");}//alert("Red Laser Win!");}
	if(blue.isAt >= 1350) {blue.scoreBoard.push(1);announcer("Blue Ship"); }//alert("Blue Laser Win! "+ );}
}




function announcer(winner){
	document.getElementsByTagName('body')[0].removeEventListener("keydown",addMiles);
  var winning_time=document.getElementById('timer').textContent;
   if( round == 3 )	{
		   announce.textContent= (red.scoreBoard.length > blue.scoreBoard.length)?
			    " Red Ship is the ultimate winner" : " Blue Ship is the ultimate winner";

	  }
   else{
		  announce.textContent=winner +" Wins in "+ winning_time ;}

  document.getElementById('playground').appendChild(announce);
  //(winner == 'Red Ship')? localStorage.setItem('red',rpoint.toString()):localStorage.setItem('blue',bpoint.toString());
 	document.getElementsByClassName('team-red')[0].textContent="Red ship: "+red.scoreBoard.length;
	document.getElementsByClassName('team-blue')[0].textContent="Blue ship: "+blue.scoreBoard.length;


}



  var totalSeconds = 0;
	var timer= document.getElementById('timer');
  var T;
/// timer
function startTime(flag) {
	if(flag == 'reset'){
	  	 clearInterval(T);
        document.getElementById('timer').innerHTML="00 : 00";
	}
	else{
		round++;
    document.getElementById('start').style.visibility="hidden";
		document.getElementById('timer').style.visibility="visible";
	  document.getElementsByTagName('body')[0].addEventListener("keydown",addMiles);
		totalSeconds = 0;
    T=setInterval(setTime, 1000);
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
					 red.domElement.style.left="0px";
				  	blue.domElement.style.left="0px";
						red.isAt = 0;
						blue.isAt = 0;
						if(document.getElementById('playground').lastChild.className =='announce')
					  document.getElementById('playground').removeChild(announce);
						if(round == 3){
							  round=0;
								bpoint=0;
								rpoint=0;
                red.scoreBoard=[];
	              blue.scoreBoard=[];
							  document.getElementsByClassName('team-red')[0].textContent="Red Ship: 0 points";
								document.getElementsByClassName('team-blue')[0].textContent="Blue Ship: 0 points";
						}
}
