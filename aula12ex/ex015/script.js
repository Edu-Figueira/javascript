function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //ano corrente identificado automaticamente.
    var fAno = document.getElementById('txtano') //ano inserido no forumlário pelo usuário.
    var res = document.querySelector('div#res')
//Agora precisamos ver se o ano está vazio (o usuário deixando de inseri-lo) ou se é maior do que o atual, o que seria ilógico (o usuário estaria no futuro!):
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Revise os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
//Para inserirmos imagem, podemos criar um img no html, como fizemos no ex014, ou CRIAR DINAMICAMENTE, que é o que faremos:
        var img = document.createElement('img') //está criando uma tag "img"...
        img.setAttribute('id', 'foto') //criando uma id para (,) foto, ou seja, uma id chamada "foto"...
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criancahomem.png')
            } else if (idade < 27) {
                //jovem
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultohomem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosohomem.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'mulher'            
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criancamulher.png')
            } else if (idade < 27) {
                //jovem
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultomulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosomulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) //insere um apêndice (appendChild), um elemento que não existe originalmente antes de o formulário ser preenchido, no resultado que aparecerá na página.
    }
}