function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO! Verifique o ano e tente novamente.')
    } else if  (xxxx) {
        img.src = 'tarde.jpg'
        
    } else {
        img.src = 'noite.jpg'
        
    }
}