export const cargarEnDom = (arreglo, cod, texto, elemDom)=>{
    arreglo.map((i)=>{
        const opt = document.createElement('option');
        opt.value = i[cod];
        opt.text = i[texto];
        elemDom.appendChild(opt);
    })
}