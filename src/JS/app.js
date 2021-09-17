function responderFormulario(event) {
    event.preventDefault();
    const formulario = document.querySelector('formulario');
    const parrafo = document.createElement('P');
    parrafo.textContent = "HOY NO MAÑANA";
    formulario.appendChild(parrafo);
    console.log("HGELLLOTURda");
}