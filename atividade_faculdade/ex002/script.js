function verificar() {
    var fano = document.getElementById('txtusu')
    var res = document.querySelector('div#res')
    var sen = document.getElementById('div#txtsen')
    if (sen.value.length == 0 || Number(sen.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    }
}