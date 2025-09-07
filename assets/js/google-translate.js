// Google Translate functionality
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

// Initialize Google Translate when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Your custom dropdown
    var customDropdown = document.getElementById("language-select-header");

    if (customDropdown) {
        customDropdown.addEventListener("change", function() {
            var langCode = this.value;
            // Get the Google Translate dropdown (the one Google injects)
            var googleDropdown = document.querySelector("#google_translate_element .goog-te-combo");

            if (langCode && googleDropdown) {
                // Set the value on Google Translate dropdown
                googleDropdown.value = langCode;

                // Dispatch the 'change' event on Google dropdown to trigger translation
                googleDropdown.dispatchEvent(new Event('change'));
            }
        });
    }
});
