document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#container");

  const btnCuadrados = document.querySelector("#btn-cuadrados");
  btnCuadrados.addEventListener("click", () => {
    let resultadoPrompt = Number(prompt("Introduce un numero de casillas"));

    while (resultadoPrompt < 1 || resultadoPrompt > 100) {
      resultadoPrompt = Number(prompt("Introduce un numero entre 1 y 100"));
    }

    for (let fila = 0; fila < resultadoPrompt; fila++) {
      for (let columna = 0; columna < resultadoPrompt; columna++) {
        console.log(resultadoPrompt);
        //Creo un cuadrado y lo agrego al contenedor
        const cuadrado = document.createElement("div");
        cuadrado.style.width = `${640 / resultadoPrompt}px`;
        cuadrado.style.height = `${640 / resultadoPrompt}px`;
        cuadrado.classList.add("cuadrado");

        cuadrado.addEventListener("mouseenter", () => {
          cuadrado.classList.add("pintado");
        });

        container.appendChild(cuadrado);
      }
    }
  });
});
