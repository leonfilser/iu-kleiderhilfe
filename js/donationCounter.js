
/* Funktion zum Zählen der bereits gesammelten Spenden auf der Startseite */
document.addEventListener("DOMContentLoaded", function () {

  const donationCount = document.getElementById("donation-counter"); // Element, in dem die Spendenanzahl angezeigt wird

  let currentNumber = 0; // Startwert
  const targetNumber = 2345; // Zielwert
  const duration = 2500; // Dauer des Hochzählens in Millisekunden
  const intervall = 30; // Intervall in Millisekunden
  
  const increment = Math.ceil(targetNumber / (duration / intervall)); // Berechnung der Schrittweite

  const counter = setInterval(() => {
    currentNumber += increment;

    if (currentNumber >= targetNumber) {
      currentNumber = targetNumber;
      clearInterval(counter);
    }

    donationCount.textContent = currentNumber.toLocaleString();

  }, intervall);
});