import { cargarIdiomas } from "./cargaDeIdiomas.js";
import { cargarPaises } from "./cargaDePaises.js";
import {cargaDeCategorias} from "./cargaDeCategorias.js";
import { cargarNoticiasDefault } from "./cargaNoticiasDefault.js";

export const cargarElementosDeApi = () => {
  cargarIdiomas();
  cargarPaises();
  cargaDeCategorias();
  cargarNoticiasDefault();
};

