/* Funktion, um zwischen Spende abholen und Spende vorbeibringen zu wechseln */
document.addEventListener("DOMContentLoaded", function () {
  
    const dropoffOption = document.getElementById("dropoff");
    const pickupOption = document.getElementById("pickup");
  
    const pickupAddressField = document.getElementById("pickup-address");
    const addressFields = pickupAddressField.querySelectorAll("input");
  
    const toggleFields = () => {
        if (pickupOption.checked) {
          pickupAddressField.style.display = "block";
          addressFields.forEach(field => {
            field.setAttribute("required", "true");
          });
  
        } else {
          pickupAddressField.style.display = "none";
          addressFields.forEach(field => {
            field.removeAttribute("required");
          });
        }
    };
  
    // Initiales Setzen der Sichtbarkeit
    toggleFields();
  
    // Event-Listener für Änderungen
    dropoffOption.addEventListener("change", toggleFields);
    pickupOption.addEventListener("change", toggleFields);
  });