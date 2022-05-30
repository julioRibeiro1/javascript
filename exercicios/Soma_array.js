//Calcular a soma dos números de um array 

function somaArray(ar){
    let soma = 0

    for( let i=0; i < ar.length; i++){
        soma += ar[i]
    }
    return soma
}
 let ar = [2,3,-1,5,7,9,10,15,95]
 let soma = somaArray(ar)
 console.log(soma)