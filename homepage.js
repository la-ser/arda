// Opens the dice game*
function openDice() {
  window.open("./Dice/dice.html");
}

//still dont understand this one
var button = document.getElementById("button");
    var audio = document.getElementById("clickSound");

    button.addEventListener("click", function() {
        audio.play();
    });