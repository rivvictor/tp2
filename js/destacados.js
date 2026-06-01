const tarjetas = document.querySelectorAll(".tarjeta-destacado");

const contador = document.getElementById("contador");

tarjetas.forEach(tarjeta => {

    tarjeta.addEventListener("click", () => {

        tarjeta.classList.toggle("seleccionada");

        const seleccionadas = document.querySelectorAll(".seleccionada");

        contador.textContent =
            `Videojuegos seleccionados: ${seleccionadas.length}`;

    });

});