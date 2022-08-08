import { $resultado } from "./variables.js";

export const limpiarContenedor = () => {
  while ($resultado.firstChild) {
    $resultado.removeChild($resultado.firstChild);
  }
};
