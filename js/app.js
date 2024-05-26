document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario-contacto');

    formulario.addEventListener('submit', function (event) {
        let valid = true;

        // Limpiar mensajes de error previos
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(function (element) {
            element.textContent = '';
        });

        // Validar campo Nombre
        const nombre = document.getElementById('nombre');
        if (nombre.value.trim() === '') {
            valid = false;
            document.getElementById('error-nombre').textContent = 'El nombre es obligatorio.';
        }

        // Validar campo Email
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '' || !emailRegex.test(email.value.trim())) {
            valid = false;
            document.getElementById('error-email').textContent = 'Debe ingresar un email válido.';
        }

        // Validar campo Teléfono (opcional)
        const telefono = document.getElementById('telefono');
        const telefonoRegex = /^\+?[0-9\s\-]+$/;
        if (telefono.value.trim() !== '' && !telefonoRegex.test(telefono.value.trim())) {
            valid = false;
            document.getElementById('error-telefono').textContent = 'Debe ingresar un número de teléfono válido.';
        }

        // Validar campo Consulta
        const consulta = document.getElementById('consulta');
        if (consulta.value.trim() === '') {
            valid = false;
            document.getElementById('error-consulta').textContent = 'La consulta es obligatoria.';
        }

        // Validar campo Interés
        const interes = document.getElementById('interes');
        if (interes.value === '') {
            valid = false;
            document.getElementById('error-interes').textContent = 'Debe seleccionar un interés.';
        }

        // Validar checkbox de aceptación
        const acepto = document.getElementById('acepto');
        if (!acepto.checked) {
            valid = false;
            document.getElementById('error-acepto').textContent = 'Debe aceptar los términos y condiciones.';
        }

        // Si el formulario no es válido, prevenir el envío
        if (!valid) {
            event.preventDefault();
        }
    });
});
