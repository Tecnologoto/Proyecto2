document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init();
    }

    const formulario = document.getElementById('formPlanificador');
    
    if (formulario) {
        const alerta = document.getElementById('mensajeAlerta');

        formulario.addEventListener('submit', function(event) {
            event.preventDefault();

            const inputNombre = document.getElementById('nombreUsuario');
            const inputEmail = document.getElementById('emailUsuario');
            const inputTelefono = document.getElementById('telefonoUsuario');
            const inputFechaNacimiento = document.getElementById('fechaNacimiento');
            const inputEdad = document.getElementById('edadUsuario');
            const inputDestino = document.getElementById('destinoSelect');

            const nombre = inputNombre.value.trim();
            const email = inputEmail.value.trim();
            const telefono = inputTelefono.value.trim();
            const fechaNacimiento = inputFechaNacimiento.value;
            const edadValor = inputEdad.value.trim();
            const destino = inputDestino.value;

            let formValido = true;

            // Validaciones
            if (nombre === '') {
                inputNombre.classList.add('is-invalid');
                formValido = false;
            } else {
                inputNombre.classList.remove('is-invalid');
                inputNombre.classList.add('is-valid');
            }

            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regexEmail.test(email)) {
                inputEmail.classList.add('is-invalid');
                formValido = false;
            } else {
                inputEmail.classList.remove('is-invalid');
                inputEmail.classList.add('is-valid');
            }

            const regexTelefono = /^\d{10}$/;
            if (!regexTelefono.test(telefono)) {
                inputTelefono.classList.add('is-invalid');
                formValido = false;
            } else {
                inputTelefono.classList.remove('is-invalid');
                inputTelefono.classList.add('is-valid');
            }

            const fechaIngresada = new Date(fechaNacimiento);
            const hoy = new Date();
            if (fechaNacimiento === '' || fechaIngresada > hoy) {
                inputFechaNacimiento.classList.add('is-invalid');
                formValido = false;
            } else {
                inputFechaNacimiento.classList.remove('is-invalid');
                inputFechaNacimiento.classList.add('is-valid');
            }

            const edad = parseInt(edadValor);
            if (edadValor === '' || isNaN(edad) || edad < 1 || edad > 120) {
                inputEdad.classList.add('is-invalid');
                formValido = false;
            } else {
                inputEdad.classList.remove('is-invalid');
                inputEdad.classList.add('is-valid');
            }

            if (destino === '') {
                inputDestino.classList.add('is-invalid');
                formValido = false;
            } else {
                inputDestino.classList.remove('is-invalid');
                inputDestino.classList.add('is-valid');
            }

            if (!formValido) {
                alerta.className = "alert alert-danger";
                alerta.textContent = "Por favor, corrige los campos marcados en rojo antes de continuar.";
                alerta.classList.remove('d-none');
            } else {
                alerta.className = "alert alert-success";
                alerta.textContent = `¡Excelente, ${nombre}! Tu itinerario ha sido registrado con éxito.`;
                alerta.classList.remove('d-none');
                
                alert("Nos pondremos en contacto con usted por los medios de comunicación proporcionados.");
                
                formulario.reset();
                document.querySelectorAll('.form-control, .form-select').forEach(el => {
                    el.classList.remove('is-valid', 'is-invalid');
                });
            }
        });
    }
});