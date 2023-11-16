const listaLivros = require('./arrays2')

function mergeSort(arrays2) {
    
    if(arrays2.length > 1) {
        const meio = Math.floor(arrays2.length / 2)
        const parte1 = mergeSort(arrays2.slice(0, meio))
        const parte2 = mergeSort(arrays2.slice(meio, arrays2.length))
        array = ordena(parte1, parte2)
    }

    return arrays2
}

function ordena(parte1, parte2){
    let posicaoAtualParte1 = 0
    let posicaoAtualParte2 = 0
    const resultado = []

    while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length ){
        let produtoAtualparte1 = parte1[posicaoAtualParte1]
        let produtoAtualparte2 = parte2[posicaoAtualParte2]

        if (produtoAtualparte1.preco < produtoAtualparte2.preco){
            resultado.push(produtoAtualparte1)
            posicaoAtualParte1++
        } else {
            resultado.push(produtoAtualparte2)
            posicaoAtualParte2++
        }
    } 

    return resultado.concat(posicaoAtualParte1 < parte1.length //acabe 1 lista 
        ? parte1.slice(posicaoAtualParte1)   // ? -> OPERADOR TERNARIO
        : parte2.slice(posicaoAtualParte2) ) //    antes TRUE : depois FALSE 
}

console.log(mergeSort(listaLivros))
