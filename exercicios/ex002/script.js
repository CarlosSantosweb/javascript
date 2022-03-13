function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 5) {
                // BEBÊ
                img.setAttribute('src', 'imagem/bebe_m.png')
            } else if (idade < 15) {
                // CIRANÇA
                img.setAttribute('src', 'imagem/crianca_m.png')
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'imagem/jovem_m.png')
            } else if (idade < 59) {
                // ADULTO
                img.setAttribute('src', 'imagem/adulto_m.png')
            } else {
                // IDOSO
                img.setAttribute('src', 'imagem/idoso_m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 5) {
                // BEBÊ
                img.setAttribute('src', 'imagem/bebe_f.png')
            } else if (idade < 15) {
                // CRIANÇA
                img.setAttribute('src', 'imagem/crianca_f.png')
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'imagem/jovem_f.png')
            } else if (idade < 59) {
                // ADULTO
                img.setAttribute('src', 'imagem/adulto_f.png')
            } else {
                // IDOSA
                img.setAttribute('src', 'imagem/idoso_f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}