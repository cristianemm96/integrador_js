import { $resultado } from "./variables.js";
import {crearNoticia} from "./creadorNoticias.js"

export function mostrarNoticiasEncontradas(resp) {
  //Muestra en DOM las noticias enviadas por la api
  resp.map((r) => {
    const noticiaActual = crearNoticia(r);
    $resultado.appendChild(noticiaActual);
  });
}

export function msgNoticiasVacias() {
  //Muestra mensaje cuando no se encontraron noticias.
  const div = document.createElement("div");
  div.classList = "msgVacio";
  const p = document.createElement("p");
  p.innerHTML = "No se han encontrado noticias";
  div.appendChild(p);
  $resultado.appendChild(div);
}

function noCargoLaImagen(source) {
  return source[1] == "_";
}

export const corregirSiEsNecesario = () => {
  //Si la imagen de la api tiene algún error, la reemplaza
  //por una imagen default
  const imagenes = document.querySelectorAll(".imagen");
  imagenes.forEach((i) => {
    const source = i.getAttribute("src");
    if (noCargoLaImagen(source)) {
      i.setAttribute(
        "src",
        "https://www.sinrumbofijo.com/wp-content/uploads/2016/05/default-placeholder.png"
      );
    }
  });
};