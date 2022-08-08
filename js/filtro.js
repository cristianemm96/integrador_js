import { $sl_cat, $sl_pais, $sl_idioma } from "./variables.js"
import { imprimirNoticias } from "./imprimir.js";
import {api} from "./api.js";


export const escucharCambioDeFiltros = ()=>{
    $sl_cat.addEventListener('change', actualizarCategoria);
    $sl_pais.addEventListener('change', actualizarPais);
    $sl_idioma.addEventListener('change', actualizarIdioma);
}

const actualizarCategoria = async () =>{
    localStorage.setItem('categoria', `${$sl_cat.value}`);
    api.actualizarCategoria();
    const not = await api.obtenerNoticias();
    imprimirNoticias(not)
}

const actualizarPais = async () =>{
    localStorage.setItem('pais', `${$sl_pais.value}`);
    api.actualizarPais();
    const not = await api.obtenerNoticias();
    imprimirNoticias(not)
}

const actualizarIdioma = async() =>{
    localStorage.setItem('idioma', `${$sl_idioma.value}`);
    api.actualizarIdioma();
    const not = await api.obtenerNoticias();
    imprimirNoticias(not)
}
