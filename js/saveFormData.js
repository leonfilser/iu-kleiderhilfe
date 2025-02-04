document.getElementById('donation-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Daten aus den Formularfeldern abrufen

  // Vorname, Nachname
  const firstname = document.getElementById('firstname').value;
  const lastname  = document.getElementById('lastname').value;

  // Email, Telefon
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Spende abgeben oder abholen
  const dropoff = document.getElementById('dropoff');
  const pickup  = document.getElementById('pickup');

  // Vollständige Adresse
  const street   = document.getElementById('street').value;
  const number   = document.getElementById('number').value;
  const postcode = document.getElementById('postcode').value;
  const city     = document.getElementById('city').value;

  // Checkboxen für Art der Kleidung (alle Checkboxen mit der Klasse .clothing-type)
  const allClothingTypes = document.querySelectorAll('.clothing-type');

  // Radio-Buttons für Krisengebiete (ausgewählter Button)
  const selectedCrisisRegion = document.querySelector('input[name="crisisRegion"]:checked');

  // ---------------------------------------------------------------------------------------------------------------------------------------------------
  // Ermittelt, ob die Spende abgegeben oder abgeholt wird und liest den zugehörigen Labeltext aus.
  let donationType = '';
  if (dropoff.checked) {
    const dropoffLabel = document.querySelector('label[for="' + dropoff.id + '"]');
    donationType = dropoffLabel ? dropoffLabel.textContent.trim() : 'Übergabe an der Geschäftsstelle';
  } else if (pickup.checked) {
    const pickupLabel = document.querySelector('label[for="' + pickup.id + '"]');
    donationType = pickupLabel ? pickupLabel.textContent.trim() : 'Abholung durch ein Sammelfahrzeug';
  }

  // Speichert die ausgewählten Kleidungsarten in einem Array anhand des Labeltexts
  const selectedClothingTypes = [];
  allClothingTypes.forEach(function(checkbox) {
    if (checkbox.checked) {
      const label = document.querySelector('label[for="' + checkbox.id + '"]');
      if (label) {
        selectedClothingTypes.push(label.textContent.trim());
      }
    }
  });

  // Statt der ID des Krisengebiets wird der Labeltext abgespeichert
  let crisisRegionLabel = null;
  if (selectedCrisisRegion) {
    const labelElement = document.querySelector('label[for="' + selectedCrisisRegion.id + '"]');
    crisisRegionLabel = labelElement ? labelElement.textContent.trim() : null;
  }

  // ---------------------------------------------------------------------------------------------------------------------------------------------------
  // Erstellt ein JSON-Objekt mit den gesammelten Formulardaten
  const formData = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    phone: phone,
    donationType: donationType,
    address: {
      street: street,
      number: number,
      postcode: postcode,
      city: city
    },
    clothingTypes: selectedClothingTypes,
    crisisRegion: crisisRegionLabel
  };

  // Testweise Ausgabe der JSON-Daten in der Konsole
  console.log(formData);

  // Speichern der Formulardaten im Session Storage
  sessionStorage.setItem('formData', JSON.stringify(formData));

  // Weiterleitung auf die Bestätigungsseite
  window.location.href = 'confirmation.html';
});