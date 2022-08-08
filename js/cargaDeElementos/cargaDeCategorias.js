import { $sl_cat } from "../variables.js";
import { cargarEnDom } from "./cargador.js";

const categoriasDisponibles = [
  { tipo: "General", nom: "general" },
  { tipo: "Negocios", nom: "business" },
  { tipo: "Entretenimiento", nom: "entertainment" },
  { tipo: "Salud", nom: "health" },
  { tipo: "Ciencia", nom: "science" },
  { tipo: "Deportes", nom: "sports" },
  { tipo: "Tecnología", nom: "technology" },
];

export const cargaDeCategorias = () => {
  cargarEnDom(categoriasDisponibles, "nom", "tipo", $sl_cat);
};
