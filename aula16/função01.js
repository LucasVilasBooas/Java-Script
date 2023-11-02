function parimpar(n) {
    if (n%2 == 0) {
        return "par !"
    } else {
        return 'Impar! '
    }
}

var res = parimpar(3)
console.log(res)
console.log('Outra forma é')
console.log(parimpar(4))