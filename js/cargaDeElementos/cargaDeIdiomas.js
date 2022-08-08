import { $sl_idioma } from "../variables.js";
import { cargarEnDom } from "./cargador.js";

const idiomasDisponibles = [
  { idioma: "Español", cod: "es" },
  { idioma: "Frances", cod: "fr" },
  { idioma: "Ingles", cod: "en" },
  { idioma: "Japones", cod: "jp" },
  { idioma: "Portugues", cod: "pt" },
  { idioma: "Ruso", cod: "ru" },
];

export const cargarIdiomas = () => {
  cargarEnDom(idiomasDisponibles, "cod", "idioma", $sl_idioma);
};
