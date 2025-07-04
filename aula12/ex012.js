var agora = new Date() //mesmo se quisermo hora, o camando é sempre "date"
var hora = agora.getHours()
console.log(`Agora são ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}