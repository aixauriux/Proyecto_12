
// Seleccionar los elementos
const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("contador");
const estado = document.getElementById("estado");

// Contar los caracteres
mensaje.addEventListener("input", function() {

    let cantidad = mensaje.value.length;

    contador.textContent = cantidad + " / 250";

    // Cambiar el borde al llegar al límite
    if (cantidad === 250) {
        mensaje.classList.add("limite-alcanzado");
        contador.classList.add("limite");
        estado.classList.add("error");

        estado.textContent = "¡Llegaste al límite! 🐹";
    } else {
        mensaje.classList.remove("limite-alcanzado");
        contador.classList.remove("limite");
        estado.classList.remove("error");

        estado.textContent = "¡Te estamos leyendo! 🐾";
    }
});
