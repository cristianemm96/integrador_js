import { contenedorNoticia } from "./noticias/contenedorNoticia.js";
import { contenedorImagenNoticia } from "./noticias/contenedorIMGNoticia.js";
import { crearContenidoNoticia } from "./noticias/creadorContenidoNoticia.js";

export const crearNoticia = (n) => {
  //Crea las card de cada noticia
  const divNoticia = contenedorNoticia();
  const imagenNoticia = contenedorImagenNoticia(n);
  const contenidoNoticia = crearContenidoNoticia(n);
  divNoticia.appendChild(imagenNoticia);
  divNoticia.appendChild(contenidoNoticia);
  return divNoticia;
};
