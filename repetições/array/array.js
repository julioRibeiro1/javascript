/*et valores = [8, 9, 8, 7, 6]
console.log(valores)

for(let pos =0; pos < valores.length; pos ++){
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log (valores[3])
*/
let num = [ 1, 5, 8, 9]

for(let pos in num){
    console.log (`A posição ${pos} tem o valor ${num[pos]}`)
}
console.log (num.indexOf(9))