export const crearContenidoNoticia = (r) => {
  //Carga el titulo, descripcion y link de la noticia.
  const contenedorContenido = document.createElement("div");
  contenedorContenido.className = "contenido-noticia";
  const titulo = crearTitulo(r);
  const { contenidoDescp, descp } = crearDescripcion(r);
  const link = crearLinkANoticia(r);
  contenidoDescp.appendChild(descp);
  contenedorContenido.appendChild(titulo);
  contenedorContenido.appendChild(contenidoDescp);
  contenedorContenido.appendChild(link);
  return contenedorContenido;
};

function crearLinkANoticia(r) {
  //Carga el link que lleva a la noticia
  const link = document.createElement("a");
  link.href = `${r.url}`;
  link.target = "_blank";
  link.text = "Leer mas";
  return link;
}

function crearDescripcion(r) {
  //Carga la descripción de la noticia
  const contenidoDescp = document.createElement("div");
  contenidoDescp.className = "descp-contenedor";
  const descp = document.createElement("p");
  descp.className = "descripcion";
  if (r.description == null || !r.description) {
    descp.innerText = "No hay descripción disponible.";
  } else if (r.description.length > 150) {
    const abreviado = r.description.slice(0, 150) + "...";
    descp.innerText = abreviado;
  } else {
    descp.innerText = `${r.description}`;
  }
  return { contenidoDescp, descp };
}

function crearTitulo(r) {
  //Carga el titulo de la notica
  const titulo = document.createElement("h3");
  titulo.className = "titulo";
  let contenidoTitulo;
  if (r.title == "null") {
    contenidoTitulo = "No hay titulo disponible";
  } else if (r.title.length > 87) {
    contenidoTitulo = r.title.slice(0, 86) + "...";
  } else {
    contenidoTitulo = r.title;
  }
  titulo.innerText = contenidoTitulo;
  return titulo;
}
