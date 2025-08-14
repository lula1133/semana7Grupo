document.addEventListener('DOMContentLoaded', function() {
    const registerBtn = document.getElementById('regBtn');
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const email = document.getElementById('email');
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    const terminos = document.getElementById('terminos');

    function validarFormulario() {
        if (nombre.value.trim() === '' || 
            apellido.value.trim() === '' || 
            email.value.trim() === '' || 
            password1.value.trim() === '' || 
            password2.value.trim() === '') {
            return false;
        }

        if (password1.value.length < 6) {
            return false;
        }

        if (password1.value !== password2.value) {
            return false;
        }

        if (!terminos.checked) {
            return false;
        }
        else {
        return true;
        }
    }

    function showAlertSuccess() {
        const alertSuccess = document.getElementById("alert-success");
        alertSuccess.classList.add('show');
        setTimeout(() => {
            alertSuccess.classList.remove('show');
        }, 3000);
    }

    function showAlertError() {
        const alertError = document.getElementById("alert-danger");
        alertError.classList.add('show');
        setTimeout(() => {
            alertError.classList.remove('show');
        }, 3000);
    }

    registerBtn.addEventListener('click', function() {
        if (validarFormulario()) {
            showAlertSuccess();
        } else {
            showAlertError();
        }
    });
});