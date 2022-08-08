import { imprimirNoticias } from "../imprimir.js";
import {api} from "../api.js";

export const cargarNoticiasDefault  = async() =>{
  localStorage.setItem('categoria', 'general')
  localStorage.setItem('pais', 'ar')
  localStorage.setItem('idioma', 'es')
  api.actualizarCategoria();
  api.actualizarIdioma();
  api.actualizarPais();
  const noticias = await api.obtenerNoticias();
  imprimirNoticias(noticias);
}
