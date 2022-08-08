import { $sl_pais } from "../variables.js";
import { cargarEnDom } from "./cargador.js";

const paisesDisponibles = [
  { pais: "Argentina", cod: "ar" },
  { pais: "Brasil", cod: "br" },
  { pais: "Estados Unidos", cod: "us" },
  { pais: "Francia", cod: "fr" },
  { pais: "Mexico", cod: "mx" },
  { pais: "Japon", cod: "jp" },
  { pais: "Rusia", cod: "ru" },
];

export const cargarPaises = () => {
  cargarEnDom(paisesDisponibles, "cod", "pais", $sl_pais);
};
