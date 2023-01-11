function rollDice() {
  // Generates a random Number between 1 and 6*
  var diceRoll = Math.floor(Math.random() * 6) + 1;

  // Shows result*
  document.getElementById("1").innerHTML = diceRoll;
}