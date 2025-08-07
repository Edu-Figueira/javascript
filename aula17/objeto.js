let amigo = {nome:'José', sexo:'M', peso:85.4, engordar(p=0){
   console.log('Engordou')
   this.peso += p //"this" é palavra que referencia objetos.
}} //mesmo se colocássemos colchetes aqui, o terminal reconheceria como objeto, pois vetores e objetos são estruturas da mesma classe/origem.

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)

//Percebamos, a nossa própria variável amigo tem funcionalidade dentro dela, isso leva a nossa programação para outro patamar. Funções dentro de variáveis! Isso é uma evolução da linguagem.