function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
  
    msg.innerHTML = `Agora são ${hora} horas.`
 
    if (hora >= 0 && hora < 12){
        // BOM DIA!
        img.src = 'manha.png'
        document.body.style.background = '#FFE4C4'
        var footer = document.getElementById('cor')
        footer.style.color = 'black'
    }else if (hora >= 12 && hora < 18){
        // BOA TARDE!
        img.src = 'tarde.jpg'
        document.body.style.background = '#FF8C69'
    }else {
        // BOA NOITE!
        img.src = 'noite.jpg'
        document.body.style.background = '#363636'
    }
}

