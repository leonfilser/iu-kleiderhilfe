
// Auslesen der Daten aus dem sessionStorage
const formDataJson = sessionStorage.getItem('formData');

if (formDataJson) {
    const formData = JSON.parse(formDataJson);
        
    // Beispiel: Erstellen eines HTML-Inhalts zur Anzeige der Daten
    const confirmFormData = document.getElementById('confirmFormData');

    let innerDivContent = `
    <h4>Bitte bestätigen Sie Ihre Eingaben</h4>
    <hr>
    
    <p><strong>Name:</strong> ${formData.firstname} ${formData.lastname}</p>
    <p><strong>E-Mail:</strong> ${formData.email}</p>
    <p><strong>Telefon:</strong> ${formData.phone}</p>
    <p><strong>Spendenart:</strong> ${formData.donationType}</p>
    `;

    // Ergänz die Adresse, falls diese vorhanden ist
    if (!Object.values(formData.address).every(value => !value)) {
    innerDivContent += `<p><strong>Adresse:</strong> ${formData.address.street} ${formData.address.number}, ${formData.address.postcode} ${formData.address.city}</p>`;
    }

    innerDivContent += `
        <p><strong>Kleidungsarten:</strong> ${formData.clothingTypes.join(', ')}</p>
        <p><strong>Krisenregion:</strong> ${formData.crisisRegion}</p>

        <a href="index.html" id="cancelButton" class="btn btn-secondary"><i class="bi bi-x-lg"></i> Abbrechen</a>
        <button id="confirmButton" class="btn btn-primary"><i class="bi bi-check-lg"></i> Eingaben bestätigen</button>
    `;

    confirmFormData.innerHTML = innerDivContent;

    // Bestätigungsnachricht bei Klick auf den Bestätigen-Button
    document.getElementById('confirmButton').addEventListener('click', function() {

        confirmFormData.classList.replace('alert-light', 'alert-success');
        
        // Ersetze den Inhalt des divs mit einer Success-Nachricht
        confirmFormData.innerHTML = `
            <h4>Danke, Ihre Eingaben wurden erfolgreich übermittelt!</h4>
            <hr>
            <a href="index.html" id="backToHomeButton" class="btn btn-primary"><i class="bi bi-arrow-left"></i> Zurück zur Startseite</a>
        `;
    });

} else {
    
    // Falls keine Daten vorhanden sind
    confirmFormData.classList.replace('alert-light', 'alert-danger');

    confirmFormData.innerHTML = `
        <h4>Hoppla! Hier stimmt was nicht.</h4>
        <a href="index.html" id="backToHomeButton" class="btn btn-primary"><i class="bi bi-arrow-left"></i> Zurück zur Startseite</a>
    `;
}