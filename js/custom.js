
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


document.addEventListener("DOMContentLoaded", function () {
  const dropoffOption = document.getElementById("dropoff-outlined");
  const pickupOption = document.getElementById("pickup-outlined");

  const streetField = document.getElementById("street").parentElement;
  const numberField = document.getElementById("number").parentElement;
  const cityField = document.getElementById("city").parentElement;

  const toggleFields = () => {
      if (pickupOption.checked) {
          streetField.style.display = "block";
          numberField.style.display = "block";
          cityField.style.display = "block";
      } else {
          streetField.style.display = "none";
          numberField.style.display = "none";
          cityField.style.display = "none";
      }
  };

  // Initiales Setzen der Sichtbarkeit
  toggleFields();

  // Event-Listener für Änderungen
  dropoffOption.addEventListener("change", toggleFields);
  pickupOption.addEventListener("change", toggleFields);
});


document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Verhindert das Standard-Formularverhalten

  // JSON-Objekt erstellen
  const formData = {
    title: document.getElementById("title").value,
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    email: document.getElementById("email").value || null,
    phone: document.getElementById("phone").value || null,
    donationType: document.querySelector('input[name="options-outlined"]:checked').id === "dropoff-outlined" ? "Vorbeibringen" : "Abholen lassen",
    address: {
      street: document.getElementById("street").value,
      number: document.getElementById("number").value,
      postcode: document.getElementById("postcode").value,
      city: document.getElementById("city").value,
    },
    clothing: {
      socks: document.getElementById("socks").checked,
      jeans: document.getElementById("jeans").checked,
      sweater: document.getElementById("sweater").checked,
      jackets: document.getElementById("jackets").checked,
    },
    crisisRegion: document.querySelector('input[name="country"]:checked')?.id || null
  };

  // JSON im localStorage speichern
  localStorage.setItem("formData", JSON.stringify(formData));

  // Zur Bestätigungsseite weiterleiten
  window.location.href = "confirmation.html";
});