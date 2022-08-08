export const contenedorImagenNoticia = (r) => {
  //Carga la imagen de la noticia. Si el link de la imagen
  //tiene algún error, carga una imagen default.
  const contenedorImagen = document.createElement("div");
  const imagen = new Image();
  imagen.className = "imagen";
  if (r.urlToImage) {
    imagen.src = `${r.urlToImage}`;
    imagen.onerror = () => {
      imagen.src =
        "https://www.sinrumbofijo.com/wp-content/uploads/2016/05/default-placeholder.png";
    };
  } else {
    imagen.src =
      "https://www.sinrumbofijo.com/wp-content/uploads/2016/05/default-placeholder.png";
  }
  contenedorImagen.appendChild(imagen);
  return contenedorImagen;
};
