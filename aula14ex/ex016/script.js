function contar() { //podemos usar "let" ao invés de "var" para facilitar em relação a escopo, ou seja, a variável não existirá fora deste bloco ("function contar(){...}") em que está sendo criada.
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    //agora verifiquemos se há dados faltando (evitar o caso de colocar nada em nenhum dos inputs, o que daria erro):
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!' //comando inserido apenas para "limpar" a tela, não deixar contagem válida anterior enquanto o aviso de erro aparecer.        
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value) //convertendo a caixa de texto em número (por mais que esteja "number" lá no input, não é reconhecido como tal pelo JS, como já vimos).
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0) {
            window.alert('Impossível contar com menos de 1 passo! Considerando passo = 1...') //além de ser impossível contar, o site trava. Não existe "passo negativo"; mesmo que a contagem seja regressiva ou envolva números negativos.
            p = 1
        }

        if(i < f) { //leia-se: se o valor do "início" for menor do que o do "final" (contagem crescente).
            //aqui podemos usaro o "while", "do while" ou o "for":
            for(let c = i; c <= f; c += p) { //leia-se: o contador (c) começará no início (i) e, enquanto ele for menor ou igual ao fim (f), receberá ele mesmo mais o passo (+= p).
            res.innerHTML += `${c} 👉 ` //o resultado será o que ele já tem mais...
            }        
        } else {
            for(let c = i; c >= f; c -= p) { //leia-se: com contador (c) começando no início (i), enquanto ele for menor ou igaul ao final (f), perderá um passo (-= p) (contagem regressiva).
                res.innerHTML += `${c} 👉 `
            }            
        }
        res.innerHTML += `🏁`
       
    }
}


/*  Passos dados e apagados durante a escrita do código para fins de testes:

1)verificando se há dados faltando (evitar o caso de colocar nada em nenhum dos inputs, o que daria erro):

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] faltam dados!')
    } else {
        alert('Tudo ok')
    } 

2) testando o funcionamento da div "res" (ao clicar em "Contar", deverá aparecer o texto "Contando:"):
    ...    
    } else {
            res.innerHTML = 'Contando: '
        }
*/