document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#container");

  for (let fila = 0; fila < 16; fila++) {
    for (let columna = 0; columna < 16; columna++) {
      //Creo un cuadrado y lo agrego al contenedor
      const cuadrado = document.createElement("div");
      container.appendChild(cuadrado);
    }
  }
});
