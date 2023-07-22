const button = document.getElementById("click");

let score = 0;

let maxScore = 5;

let timeStarted;
let timeStopped;

button.addEventListener("click", () => {
  if (score >= maxScore) return;

  if (score == 0) {
    timeStarted = new Date().getTime();
  }

  score++;

  document.getElementById("score").innerHTML = `Punktestand: ${score}`;

  if (score == maxScore) {
    timeStopped = new Date().getTime();
    let timeNeeded = timeStopped - timeStarted;
    timeNeeded = (timeNeeded / 1000).toFixed(2);

    button.innerHTML = "Startet neu...";
    setTimeout(delayedFunction, 3000);
    document.getElementById("score").innerHTML = `Punkte: ${score} | ${timeNeeded}`;
  }
  if (maxScore > score > 0) {
    button.innerHTML = "Klicken!";
  }
});

function delayedFunction() {
  score = 0;
  document.getElementById("score").innerHTML = `Punktestand: ${score}`;
}
