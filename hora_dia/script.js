function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora =data.getHours()
   // var hora = 19
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18){
        img.src = 'tarde.jpg'
        document.body.style.background = 'green'
    } else{
        img.src = 'noite.jpg'
        document.body.style.background = 'black'
    }
    msg.innerHTML = `Agora são ${hora} horas!`
    
}