function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0) {
        window.alert('Por favor, digite um número.')        
    } else {
        let n = Number(num.value)
        //agora vem a programação da tabuada, pode usar tanto o "while" quanto o "for":
        let c = 1; //colocamos um contador que começa no 1. A tabuada vai de 1 até 10 (10 elementos que o JS criará)
        tab.innerHTML = '' //para limpar a tabuada mostrada anteriormente.
        while (c <= 10) { //leia-se: enquanto o contador for menor ou igual a 10, o JS irá adicionar elementos dentro da tag select do html, criando "options" automaticamente, como acontece quando, manualmente, usamos a tag option dentro da tag select.
            let item = document.createElement('option')
            //agora, programando o valor da option:
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //as options também precisam ter value, aqui em JS não é tão relevante, mas para outras linguagens de programação, como PHP, é, pois nos diz qual item foi selecionado. Com isso, cada linha que aparece dentro do select (options) ganha um nome: tab1, tab2... até tab10.
            tab.appendChild(item)
            c++ //ao utilizarmos "while", precisamos mandar incrementar o valor do contador
        }
    }
    
}