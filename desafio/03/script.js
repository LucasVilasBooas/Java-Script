function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img2')
    var data =new Date()
    var hora =data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora < 12) {
        img.src = 'manha.jpg'
        document.body.style.backgroundImage= 'linear-gradient(to top, rgb(255, 72, 0), blue)'
    } else if  (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.backgroundImage= 'linear-gradient(to top, rgb(200, 215, 238), rgb(83, 140, 247'
    } else {
        img.src = 'noite.jpg'
        document.body.style.backgroundImage= 'linear-gradient(to top, rgb(51, 116, 214), rgb(4, 23, 58)'
    }
}