const clientes = require("./cliente.json");

function ordenar(lista, propiedade){
    const resultado = lista.sort((a, b) =>{
    if (a[propiedade] < b[propiedade]){
        return -1
    } if (a[propiedade]> b[propiedade]) {
        return 1
    }
    return 0
    })
    return resultado
}

const ordenadoNome = ordenar (clientes, "nome")

console.log(ordenadoNome)





