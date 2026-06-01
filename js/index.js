
const meriendas = [
    "Cafe con leche",
    "Medialunas",
    "Donas",
    "Facturas",
    "Galletitas de avena"
];

const listaMeriendas = document.getElementById("listaMeriendas");

meriendas.forEach(merienda => {
    const tarjeta = document.createElement("div");

    tarjeta.textContent = merienda;

    tarjeta.classList.add("tarjeta");

    listaMeriendas.appendChild(tarjeta);
});

const boton = document.getElementById("btnCantidad");

boton.addEventListener("click", () => {

    document.getElementById("resultado").textContent =
        `Hay ${meriendas.length} meriendas disponibles`;

});