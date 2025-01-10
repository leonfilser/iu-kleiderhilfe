document.addEventListener("DOMContentLoaded", function () {
    // Alle Boxen auswählen
    const boxes = document.querySelectorAll(".col-4");

    // Funktion zum Aktualisieren der Auswahl
    const updateSelection = (selectedBox) => {
      boxes.forEach(box => box.classList.remove("selected")); // Entfernt "selected" von allen Boxen
      selectedBox.classList.add("selected"); // Fügt "selected" zur geklickten Box hinzu
    };

    // Event-Listener für jede Box hinzufügen
    boxes.forEach(box => {
      box.addEventListener("click", () => {
        updateSelection(box);
      });
    });
  });




    document.addEventListener("DOMContentLoaded", function () {
        const targetNumber = 2345; // Zielwert
        const duration = 2500; // Dauer des Hochzählens in Millisekunden
        const donationCount = document.getElementById("donation-count");
        
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

