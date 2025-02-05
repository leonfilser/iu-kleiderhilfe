
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
    `;

    // Ergänz die Telefonnummer, falls diese eingegeben wurde
    if(formData.phone) innerDivContent += `
    <p><strong>Telefon:</strong> ${formData.phone}</p>
    `;

    innerDivContent += `
    <p><strong>Spendenart:</strong> ${formData.donationType}</p>
    `;

    // Ergänz die Adresse, falls diese vorhanden ist
    if (!Object.values(formData.address).every(value => !value)) {
    innerDivContent += `<p><strong>Abholadresse:</strong> ${formData.address.street} ${formData.address.number}, ${formData.address.postcode} ${formData.address.city}</p>`;
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

        // An dieser Stelle wäre es sinnvoll die Daten in einer Datenbank zu speichern
        // Nach erfolgreichem Abspeichern könnte dann folgende Bestätigungsmeldung angezeigt werden

        confirmFormData.classList.replace('alert-light', 'alert-success');
        
        // Ersetze den Inhalt des divs mit einer Success-Nachricht
        confirmFormData.innerHTML = `
            <h4>Danke, Ihre Eingaben wurden erfolgreich übermittelt!</h4>
            <hr>
            <a href="index.html" id="backToHomeButton" class="btn btn-primary"><i class="bi bi-arrow-left"></i> Zurück zur Startseite</a>
        `;

        // Lösche die Formulardaten aus dem sessionStorage
        sessionStorage.removeItem('formData');

    });

} else {
    
    // Falls keine Daten vorhanden sind
    confirmFormData.classList.replace('alert-light', 'alert-danger');

    confirmFormData.innerHTML = `
        <h4>Hoppla! Hier stimmt was nicht.</h4>
        <a href="index.html" id="backToHomeButton" class="btn btn-primary"><i class="bi bi-arrow-left"></i> Zurück zur Startseite</a>
    `;
}