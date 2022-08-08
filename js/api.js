import { $txt_busqueda } from "./variables.js";

const llave = "2ebec88a3e0a46848575177bc84c5fc0";
export class Api {
  constructor(){
    this.categoria = localStorage.getItem("categoria"),
    this.pais = localStorage.getItem("pais"),
    this.idioma = localStorage.getItem("idioma"),
    this.limite = 14;
  }
  obtenerNoticias = async()=>{
    const txtBusqueda = $txt_busqueda.value;
    if(txtBusqueda){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.pais}&category=${this.categoria}&language=${this.idioma}&q=${txtBusqueda}&pageSize=${this.limite}&apiKey=${llave}`;
      return await this.obtenerConUrl(url);
    }else{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.pais}&category=${this.categoria}&language=${this.idioma}&pageSize=${this.limite}&apiKey=${llave}`;
      return await this.obtenerConUrl(url);
    }
  }
  obtenerConUrl = async(url)=>{
    try {
      const resp = await fetch(url);
      const respJSON = await resp.json();
      if (respJSON == 404) {
        throw new Error("No hay resultados");
      }
      else {
        return respJSON["articles"];
      }
    } catch (e) {
      console.log(`${e}`);
    }
  }
  actualizarCategoria = ()=>{
    this.categoria = localStorage.getItem('categoria');
  }
  actualizarPais = ()=>{
    this.pais = localStorage.getItem('pais');
  }
  actualizarIdioma = ()=>{
    this.idioma = localStorage.getItem('idioma')
  }
}

export const api = new Api();