function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO! Verifique o ano e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'masculino'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'menino.jpg')
            } else if (idade <60 ){
                img.setAttribute('src', 'homem.jpg')
            } else {
                img.setAttribute('src', 'idoso.jpeg')
            }
        } else if (fsex[1].checked) {
            genero = "feminino"
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'menina.jpg')
            } else if (idade <60 ){
                img.setAttribute('src', 'mulher.jpg')
            } else {
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos o genero ${genero} com ${idade} anos`
        res.appendChild(img)   
    }
}