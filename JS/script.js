document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#container");

  const btnCuadrados = document.querySelector("#btn-cuadrados");
  btnCuadrados.addEventListener("click", () => {
    let resultadoPrompt = Number(prompt("Introduce un numero de casillas"));

    while (resultadoPrompt < 1 || resultadoPrompt > 100) {
      resultadoPrompt = Number(prompt("Introduce un numero entre 1 y 100"));
    }
  });

  for (let fila = 0; fila < 16; fila++) {
    for (let columna = 0; columna < 16; columna++) {
      //Creo un cuadrado y lo agrego al contenedor
      const cuadrado = document.createElement("div");
      cuadrado.classList.add("cuadrado");

      cuadrado.addEventListener("mouseenter", () => {
        cuadrado.classList.add("pintado");
      });

      container.appendChild(cuadrado);
    }
  }
});
