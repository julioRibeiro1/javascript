var portugues = 2
var matematica = 13
var geografia = 5
var historia = 2
var ciencias = 3
var media = (portugues + matematica + geografia + historia + ciencias) / 5
if (media < 4){
    console.log(`Sua média foi de ${media} e vc esta de recuperação.`)
} else if (media >= 6 && media < 8) {
    console.log(`Sua média foi de ${media} e voçê foi aprovado.`)
} else if (media > 4 && media < 6){
    console.log(`Sua média foi de ${media} voçê está de recuperação.`)
} else if (media > 9 && media < 10){
    console.log(`Sua média foi de ${media} aprovado com louvor Parabéns.`)
}
