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

        let interacciones = 0;
        // Guardamos los valores RGB originales del cuadrado
        let rojo;
        let verde;
        let azul;

        cuadrado.addEventListener("mouseenter", () => {
          interacciones++;

          if (interacciones === 1) {
            rojo = Math.floor(Math.random() * 256);
            verde = Math.floor(Math.random() * 256);
            azul = Math.floor(Math.random() * 256);
          }

          // Cada interacción representa un 10% más de oscurecimiento
          const porcentaje = 1 - interacciones * 0.1;

          // Reducimos cada componente RGB según el porcentaje
          const rojoOscuro = rojo * porcentaje;
          const verdeOscuro = verde * porcentaje;
          const azulOscuro = azul * porcentaje;

          // Aplicamos el nuevo color al cuadrado
          cuadrado.style.backgroundColor = `rgb(${rojoOscuro}, ${verdeOscuro}, ${azulOscuro})`;
        });

        container.appendChild(cuadrado);
      }
    }
  });
});
