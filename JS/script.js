document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#container");

  const btnCuadrados = document.querySelector("#btn-cuadrados");
  btnCuadrados.addEventListener("click", () => {
    let resultadoPrompt = Number(prompt("Introduce un numero de casillas"));

    while (resultadoPrompt < 1 || resultadoPrompt > 100) {
      resultadoPrompt = Number(prompt("Introduce un numero entre 1 y 100"));
    }

    container.replaceChildren();

    for (let fila = 0; fila < resultadoPrompt; fila++) {
      for (let columna = 0; columna < resultadoPrompt; columna++) {
        console.log(resultadoPrompt);
        //Creo un cuadrado y lo agrego al contenedor
        const cuadrado = document.createElement("div");
        cuadrado.style.width = `${640 / resultadoPrompt}px`;
        cuadrado.style.height = `${640 / resultadoPrompt}px`;
        cuadrado.classList.add("cuadrado");

        cuadrado.addEventListener("mouseenter", () => {
          const rojo = Math.floor(Math.random() * 256);
          const verde = Math.floor(Math.random() * 256);
          const azul = Math.floor(Math.random() * 256);
          cuadrado.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
        });

        container.appendChild(cuadrado);
      }
    }
  });
});
