const datosFormulario = {
    nombre: "",
    telefono: "",
    email: "",
    mensaje: ""
}

const nombre = document.querySelector('#nombre');
const telefono = document.querySelector('#telefono');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener("change", leerFormulario);
telefono.addEventListener("change", leerFormulario);
email.addEventListener("change", leerFormulario);
mensaje.addEventListener("change", leerFormulario);

formulario.addEventListener('submit', validacionForm);


function validacionForm(event) {
    event.preventDefault();
    const { nombre, telefono, email, mensaje } = datosFormulario;

    mensajeAlerta = "Te falta rellenar los siguientes campos: ";
    faltas = 0;
    if (nombre === "") {
        mensajeAlerta = mensajeAlerta + "nombre";
        faltas++;
    }
    if (telefono == '') {
        if (faltas > 0) {
            mensajeAlerta = mensajeAlerta + " , ";
        }
        mensajeAlerta = mensajeAlerta + "telefono";
        faltas++;
    }
    if (email === "") {
        if (faltas > 0) {
            mensajeAlerta = mensajeAlerta + " , ";
        }
        faltas++
        mensajeAlerta = mensajeAlerta + "email";

    }
    if (mensaje === "") {
        if (faltas > 0) {
            mensajeAlerta = mensajeAlerta + " y ";
        }
        faltas++
        mensajeAlerta = mensajeAlerta + " mensaje ";
    }
    if (faltas === 0) mensajeAlerta = "LOS DATOS HAN SIDO ENVIADOS CORRECTAMENTE";
    if (faltas > 0) crearAlerta(mensajeAlerta, faltas);
    else crearAlerta(mensajeAlerta, faltas);
}
//Creación de la alerta
function crearAlerta(mensaje, faltas) {
    const alerta = document.createElement("p");
    alerta.textContent = mensaje;
    if (faltas > 0) alerta.classList.add("error");
    else alerta.classList.add("correcto");

    formulario.appendChild(alerta);

    //Destrucción de la alerta
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

function leerFormulario(event) {
    datosFormulario[event.target.id] = event.target.value;
    console.log(datosFormulario)
}