document.addEventListener('DOMContentLoaded', function() {
    // Inicializar animaciones de desplazamiento (AOS)
    if (typeof AOS !== 'undefined') {
        AOS.init();
    }

    // Lógica del formulario planificador
    const formulario = document.getElementById('formPlanificador');
    
    if (formulario) {
        const alerta = document.getElementById('mensajeAlerta');

        formulario.addEventListener('submit', function(event) {
            // Intercepta el envío nativo para evitar la recarga de la página
            event.preventDefault();

            // Capturar elementos de entrada principales
            const nombre = document.getElementById('nombreUsuario').value.trim();
            const email = document.getElementById('emailUsuario').value.trim();
            const destino = document.getElementById('destinoSelect').value;
            const fecha = document.getElementById('fechaViaje').value;

            // Validación en JavaScript
            if (nombre === '' || email === '' || destino === '' || fecha === '') {
                alerta.className = "alert alert-danger";
                alerta.textContent = "Por favor, completa todos los campos obligatorios del planificador.";
                alerta.classList.remove('d-none');
            } else {
                alerta.className = "alert alert-success";
                alerta.textContent = `¡Excelente, ${nombre}! Tu itinerario para '${destino}' ha sido registrado con éxito. Nos pondremos en contacto contigo.`;
                alerta.classList.remove('d-none');
                
                // Limpiar el formulario tras el éxito
                formulario.reset();
            }
        });
    }
});