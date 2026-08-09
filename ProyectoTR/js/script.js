// Mostrar y ocultar contenido
const botonInformacion = document.getElementById("botonInformacion");
const informacionAdicional = document.getElementById("informacionAdicional");

if (botonInformacion && informacionAdicional) {
    botonInformacion.addEventListener("click", function () {
        informacionAdicional.classList.toggle("contenido-visible");

        if (informacionAdicional.classList.contains("contenido-visible")) {
            botonInformacion.textContent = "Ocultar información";
        } else {
            botonInformacion.textContent = "Mostrar más información";
        }
    });
}


// Validación del formulario
const formulario = document.getElementById("formularioContacto");

if (formulario) {
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();
        const resultado = document.getElementById("resultadoFormulario");

        if (nombre === "" || correo === "" || mensaje === "") {
            resultado.textContent = "Por favor, completa todos los campos.";
            resultado.className = "mensaje-error";
            return;
        }

        if (!correo.includes("@") || !correo.includes(".")) {
            resultado.textContent = "Por favor, escribe un correo válido.";
            resultado.className = "mensaje-error";
            return;
        }

        resultado.textContent = "Formulario enviado correctamente.";
        resultado.className = "mensaje-correcto";

        formulario.reset();
    });
}

const botonTema = document.getElementById("botonTema");

if (botonTema) {
    botonTema.addEventListener("click", function () {

        document.body.classList.toggle("modo-oscuro");

        if (document.body.classList.contains("modo-oscuro")) {
            botonTema.textContent = "☀️ Modo claro";
        } else {
            botonTema.textContent = "🌙 Modo oscuro";
        }

    });
}