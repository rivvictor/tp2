const videojuegos = [
    { nombre: "Minecraft", categoria: "Survival" },
    { nombre: "Grand Theft Auto V", categoria: "Accion" },
    { nombre: "Doom Eternal", categoria: "Accion" },
    { nombre: "Age of Empires 2", categoria: "Estrategia" },
    { nombre: "Counter Strike 2", categoria: "Accion" },
    { nombre: "Need for Speed Heat", categoria: "Carreras" }
];

const listaJuegos = document.getElementById("listaJuegos");

function mostrarJuegos(juegos) {

    listaJuegos.innerHTML = "";

    juegos.forEach(juego => {

        const tarjeta = document.createElement("div");

        tarjeta.classList.add("tarjeta");

        tarjeta.textContent =
            `${juego.nombre} - ${juego.categoria}`;

        listaJuegos.appendChild(tarjeta);

    });

}

mostrarJuegos(videojuegos);

document.getElementById("btnTodos").addEventListener("click", () => {
    mostrarJuegos(videojuegos);
});

document.getElementById("btnAccion").addEventListener("click", () => {

    const juegosAccion = videojuegos.filter(juego =>
        juego.categoria === "Accion"
    );

    mostrarJuegos(juegosAccion);

});