function imprimirTabuada(n){
    for (let i = 1; i <= 10; i++){
        let linha = n + "*"  + i + "=" + n * i
        console.log(linha)
    }
}
for (let i = 1; i <=10;i++){
imprimirTabuada(i)
console.log('')
}