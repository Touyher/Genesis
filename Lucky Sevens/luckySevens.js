function playGame () {
  //get bet
  var startBet = document.getElementById("startingAmount").value;


  //display error if bet less than 0
    if(startBet <= 0) {
    alert("Please bet more than zero dollars!");
    document.getElementById("result").style.display = "none";
  } else {
    //display results table
    document.getElementById("result").style.display = "block";
  }
  var earn = 4;
  var lose = 1;
  var gameMoney = startBet;
  var maxMoney = startBet;
  var rollCounter = 0;
  var maxRoll = 0;
    //loop to play game only if there is gameMoney
  while(gameMoney > 0){
    //roll dice, max = 12, min = 2
    var roleDice = Math.ceil(Math.random() * (1 + 12 - 2));
    rollCounter++
    //add to gameMoney if dice roll is 7
    if (roleDice == 7){
      gameMoney = gameMoney + earn;
      //take info the max amount and roll count for max amout
      if(gameMoney > maxMoney){
     		 maxMoney = gameMoney;
         maxRoll = rollCounter;
     	 }
       //lose money if dice roll is not 7
    } else {
      gameMoney = gameMoney - lose;
    }
  }

  document.getElementById("betAmount").innerText= "$ "+ startBet + ".00";
  document.getElementById("brokeRolls").innerText= rollCounter;
  document.getElementById("highWin").innerText= "$ " + maxMoney +".00";
  document.getElementById("highWinRoll").innerText= maxRoll;
  document.getElementById("buttonClick").innerText = "Play Again"; //change the button text to play again
}
