import { limpiarContenedor } from "./limpiarResultado.js";
import { mostrarNoticiasEncontradas, msgNoticiasVacias, corregirSiEsNecesario} from "./interaccionConDom.js";

export const imprimirNoticias = (resp) => {
  if(!resp || resp.length == 0){
    limpiarContenedor();
    msgNoticiasVacias();
  }else{
    limpiarContenedor();
    mostrarNoticiasEncontradas(resp);
    corregirSiEsNecesario();
  }
};


