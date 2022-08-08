import { api} from "./api.js";
import { $form, $txt_busqueda } from "./variables.js"
import { imprimirNoticias } from "./imprimir.js";

export const escucharBusquedaPorTexto = ()=>{
    $form.addEventListener('submit', escucharBusqueda);
    $form.addEventListener('keyup', reiniciarNoticias);
}

const esVacio = (elem) => !elem || elem.trim().length == 0;

const escucharBusqueda = async(e)=>{
    e.preventDefault();
    if(!esVacio($txt_busqueda.value)){
        const not = await api.obtenerNoticias();
        imprimirNoticias(not)
    }
}

const reiniciarNoticias = async(e)=>{
    console.log(e.keyCode);
    if(esVacio($txt_busqueda.value) && (e.keyCode == 8)){
        const not = await api.obtenerNoticias();
        imprimirNoticias(not)
    }
}