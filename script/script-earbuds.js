 const imagenes = [
    "images/earbuds/earbuds_01.png",
    "images/earbuds/earbuds_02.png",
    "images/earbuds/earbuds_03.png",
    "images/earbuds/earbuds_04.png"
  ];

  const contMiniaturas = document.getElementById("miniaturas");
  const imagenPrincipal = document.getElementById("imagenPrincipal");

  function cargarGaleria() {
    imagenes.forEach((src, index) => {
      const img = document.createElement("img");
      img.src = src;

      img.addEventListener("click", () => cambiarImagen(src, img));

      contMiniaturas.appendChild(img);

      // Primera imagen por defecto
      if (index === 0) {
        imagenPrincipal.src = src;
        img.classList.add("activa");
      }
    });
  }

  function cambiarImagen(src, mini) {
    imagenPrincipal.src = src;

    document.querySelectorAll(".miniaturas img").forEach(i => {
      i.classList.remove("activa");
    });

    mini.classList.add("activa");
  }

  cargarGaleria();
