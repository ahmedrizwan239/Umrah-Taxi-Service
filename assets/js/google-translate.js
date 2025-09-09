// Google Translate functionality
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
}

// Initialize Google Translate when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    const dropdownIds = ["language-select-mobile", "language-select-desktop"];

    dropdownIds.forEach(function (id) {
        const dropdown = document.getElementById(id);

        if (dropdown) {
            dropdown.addEventListener("change", function () {
                const langCode = this.value;
                const googleDropdown = document.querySelector("#google_translate_element .goog-te-combo");

                if (langCode && googleDropdown) {
                    googleDropdown.value = langCode;
                    googleDropdown.dispatchEvent(new Event('change'));
                }
            });
        }
    });
});
