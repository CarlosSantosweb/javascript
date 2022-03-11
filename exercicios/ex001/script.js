function carregar() {
    var msg = document.getElementById('msg')
    var img  = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas!!`
    if (hora >= 0 && hora < 5) {
        // BOA MADRUGADA
        img.src = 'imagens/demadrugada_pq.png'
        document.body.style.background = '#014246'
    } else if (hora >= 6 && hora < 12) {
        //BOM DIA
        img.src = 'imagens/demanha_pq.png'
        document.body.style.background = '#51663D'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'imagens/detarde_pq.png'
        document.body.style.background = '#C9C099'
    } else {
        // BOA NOITE
        img.src = 'imagens/denoite_pq.png'
        document.body.style.background = '#18353D'
    }
}
