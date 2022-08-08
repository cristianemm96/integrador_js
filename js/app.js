import {cargarElementosDeApi} from './cargaDeElementos/cargaElementos.js'
import {escucharBusquedaPorTexto} from './busquedaPorTexto.js'
import {escucharCambioDeFiltros} from './filtro.js'


window.addEventListener('load',()=>{
    //Carga de elementos de api, filtros y eventos.
    cargarElementosDeApi();
    escucharBusquedaPorTexto();
    escucharCambioDeFiltros();
    
})

