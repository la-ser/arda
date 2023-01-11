  // Den Button mit der ID "button" abrufen
  const button = document.getElementById("button");
    
  // Eine Variable namens "score" definieren, die den aktuellen Punktestand speichert
  let score = 0;
  
  // Ein Klick-Ereignis dem Button hinzufügen
  button.addEventListener("click", () => {
    // Den Punktestand um 1 erhöhen
    score++ ;
    
    // Den aktualisierten Punktestand in das HTML-Element mit der ID "score" schreiben
    document.getElementById("score").innerHTML = `Punktestand: ${score}`;

    if (score > 24 ) {
        score = 0;
        button.innerHTML = "Nochmal spielen"
    } 
    if (score > 0 ){
        button.innerHTML = "Klicken!"
    }
  });