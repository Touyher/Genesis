function playGame () {
  var startBet = document.getElementById("startingAmount").value; //parseInt if not working

  if (startBet <=0) {
    alert("Please bet more than zero dollars!");
    document.getElementById("result").style.display = "none";       //good
  } else {
    document.getElementById("result").style.display = "block";    //good
  }

  var earn = 4;
  var lose = 1;
  var total = startBet;
  var maxMoney = startBet;
  var rollCounter = 0;
  var maxRoll =0;

  while(total > 0){
    var roleDice = Math.ceil(Math.random() * (1 + 12 - 2));
    if (roleDice == 7){
      total = total + earn;
      if(total > maxMoney){
     		 max = total;
         maxRoll = rollCounter;
     	 }
    } else {
      total = total - lose;
    }
    rollCounter++
  }


  document.getElementById("betAmount").innerText= "$ "+ startBet + ".00";
  document.getElementById("brokeRolls").innerText= rollCounter;
  document.getElementById("highWin").innerText= "$ " + maxMoney +".00";
  document.getElementById("highWinRoll").innerText= maxRoll;
  document.getElementById("buttonClick").innerText = "Play Again"; //change the button text to play again

}
