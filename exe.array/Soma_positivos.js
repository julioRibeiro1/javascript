function positiveSum(arr){
    
    let soma = 0

    for (let i = 0; 1 < arr.length; i ++ ){
        if (arr[i] >= 0 ){
            soma = soma + arr[i]
        }
    }
}
console.log(positiveSum())