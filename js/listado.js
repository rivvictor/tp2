const videojuegos = [
    { nombre: "Minecraft", categoria: "Survival" },
    { nombre: "Grand Theft Auto V", categoria: "Accion" },
    { nombre: "Doom Eternal", categoria: "Accion" },
    { nombre: "Age of Empires 2", categoria: "Estrategia" },
    { nombre: "Counter Strike 2", categoria: "Accion" },
    { nombre: "ARK Survival Evolved", categoria: "Survival" },
    { nombre: "StarCraft II", categoria: "Estrategia" },
    { nombre: "7 Days to Die", categoria: "Survival" },
    { nombre: "Forza Horizon 6", categoria: "Carreras" },
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

document.getElementById("btnSurvival").addEventListener("click", () => {

    const juegosSurvival = videojuegos.filter(juego =>
        juego.categoria === "Survival"
    );

    mostrarJuegos(juegosSurvival);

});

document.getElementById("btnEstrategia").addEventListener("click", () => {

    const juegosEstrategia = videojuegos.filter(juego =>
        juego.categoria === "Estrategia"
    );

    mostrarJuegos(juegosEstrategia);

});

document.getElementById("btnCarreras").addEventListener("click", () => {

    const juegosCarreras = videojuegos.filter(juego =>
        juego.categoria === "Carreras"
    );

    mostrarJuegos(juegosCarreras);

});