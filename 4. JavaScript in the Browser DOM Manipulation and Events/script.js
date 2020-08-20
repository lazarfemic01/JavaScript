var scores, roundScore, activePlayer, gamePlaying;
init();
var lastDice


// document.querySelector("#current-" + activePlayer).textContent="dice";
// document.querySelector("#current-" + activePlayer).innerHTML="<em>" + dice + "</em>";

// var x=document.querySelector("#score-0").textContent;
// console.log(x);


// document.querySelector(".dice").style.display="none";

// document.getElementById("score-0").textContent="0";
// document.getElementById("score-1").textContent="0";
// document.getElementById("current-0").textContent="0";
// document.getElementById("current-1").textContent="0";

// function btn () {

// }
// btn()
document.querySelector(".btn-roll").addEventListener("click", function() {
     if (gamePlaying) {

    //1.random number
     var dice1=Math.floor(Math.random() *6)+1;
     var dice2=Math.floor(Math.random() *6)+1;

    //2. Display the result

    document.getElementById("dice1").style.display="block";
    document.getElementById("dice2").style.display="block";
    document.getElementById("dice1").src="dice-" + dice1 + '.png';
    document.getElementById("dice2").src="dice-" + dice2 + '.png';

//3.update the round score If the rolled number was not 1
// if(dice===6 && lastDice===6) {
    //player loses the score
    // scores [activePlayer]=0;
    // document.querySelector("#score-" + activePlayer).textContent=scores[activePlayer];
 if( dice1 !== 1 && dice2 !==1) {
    //add score
    roundScore+=dice1 + dice2;
    document.querySelector("#current-" + activePlayer).textContent=roundScore;

}else {
    //Next player

    nextPlayer();
}
lastDice=dice;
}

});
document.querySelector(".btn-hold").addEventListener("click",function (){
      if(gamePlaying) {
        //add Current Score to the Global Score
        scores[activePlayer]+=roundScore
        //update the UI
        document.querySelector("#score-" + activePlayer).textContent=scores[activePlayer];

        var input=document.querySelector(".final-score").value;
        var winningScore;
        // Undefined, null, 0 or "" are COERCED as false
        if (input) {
            winningScore=input;
        } else {
            winningScore=100; 
        }
        //check if the player won the game
        if (scores[activePlayer]>=winningScore) {
          document.querySelector("#name-" + activePlayer).textContent="Winner!"
          document.getElementById("dice1").style.display="none";
          document.getElementById("dice2").style.display="none";
          document.querySelector(".player-"+activePlayer+ "-panel").classList.add("winner");
          document.querySelector(".player-"+activePlayer+ "-panel").classList.remove("active");
          gamePlaying=false;
      } else {
          nextPlayer();
      }
      }
     
      
});

function nextPlayer() {
    activePlayer===0? activePlayer=1: activePlayer=0;
    roundScore=0;
    document.getElementById("current-0").textContent="0";
    document.getElementById("current-1").textContent="0";

    // document.querySelector(".player-0-panel").classList.remove("active");
    // document.querySelector(".player-1-panel").classList.add("active");
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    
    document.getElementById("dice1").style.display="none";
    document.getElementById("dice2").style.display="none";
}

document.querySelector(".btn-new").addEventListener("click", init);
  

function init () {
    scores=[0, 0];
    activePlayer=0;
    roundScore=0;
    gamePlaying=true;

    document.getElementById("dice1").style.display="none";
    document.getElementById("dice2").style.display="none";

    document.getElementById("score-0").textContent="0";
    document.getElementById("score-1").textContent="0";
    document.getElementById("current-0").textContent="0";
    document.getElementById("current-1").textContent="0";
    document.getElementById("name-0").textContent="Player 1";
    document.getElementById("name-1").textContent="Player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    


    
}

//coding challenge 6
