
/* Funktion zum Zählen der bereits gesammelten Spenden auf der Startseite */
document.addEventListener("DOMContentLoaded", function () {
  const targetNumber = 2345; // Zielwert
  const duration = 2500; // Dauer des Hochzählens in Millisekunden
  const donationCount = document.getElementById("donation-counter");
  
  let currentNumber = 0;
  const increment = Math.ceil(targetNumber / (duration / 50)); // Berechnung der Schrittweite

  const counter = setInterval(() => {
      currentNumber += increment;

      if (currentNumber >= targetNumber) {
          currentNumber = targetNumber;
          clearInterval(counter);
      }

      donationCount.textContent = currentNumber.toLocaleString();
  }, 50);
});