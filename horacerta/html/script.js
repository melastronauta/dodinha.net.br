function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
   // msg.innerHTML = `Agora são ${hora}:${minuto}`
    if (hora >= 0 && hora < 12){
        //bom dia
        msg.innerHTML += `Bom dia! Agora são ${hora}:${minuto}`
        img.src = 'image/manha.png'
        document.body.style.background = '#fe9949'
    } else if (hora >= 12 && hora < 18){
        //boa tarde
        msg.innerHTML += `...Boa Tarde! Agora são ${hora}:${minuto}`
        img.src = 'image/tarde.png'
        document.body.style.background = '#f4b357'
    } else {
        msg.innerHTML += `...Boa Noite! Agora são ${hora}:${minuto}`
        img.src = 'image/noite.png'
        document.body.style.background = '#003261'
    }
    
    
}

