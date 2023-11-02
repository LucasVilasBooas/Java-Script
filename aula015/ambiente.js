let num = [5, 8, 2, 9, 3]

console.log (`Nosso vetor é o ${num}`) 

console.log ('trocando o numero escolhendo a posição')

num[3] = 6

console.log (`Nosso vetor é o ${num}`)

console.log ('adicionando numero na ultima posição')

num.push(7)

console.log (`Nosso vetor é o ${num}`)

console.log ('ordenar os numeros')

num.sort()

console.log (`Nosso vetor é o ${num}`)

console.log (`O segundo valor do meu vetor é ${num[1]}`)

let pos = num.indexOf(8)
console.log(`O valor 8 esta na posição ${pos}`)

let pos1 = num.indexOf(1)
console.log(`O valor 8 esta na posição ${pos1}`)

console.log('↓ Podemos usar de varias formas ↓')

let pos2 = num.indexOf(7)
if (pos == -1){
    console.log('O valor nao foi encontrado')
} else {
    console.log(`O valor esta na posição ${pos2}`)
}