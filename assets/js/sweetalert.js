// Dynamically load SweetAlert2 if not already loaded
(function loadSweetAlert() {
    if (typeof Swal === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
        script.async = true;
        script.onload = () => console.log('SweetAlert2 loaded');
        document.head.appendChild(script);
    }
})();

function showToast(message, icon = 'success') {
    Swal.fire({
        icon,
        title: message,
        timer: 5000,
        timerProgressBar: true,
        showConfirmButton: false,
        toast: true,
        position: 'top-end'
    });
}
