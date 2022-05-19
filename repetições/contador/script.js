function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert ('[ERRO] Dados faltando')
    } else{
        res.innerHTML ='Contando'
        let i = Number(txti.value)
        let f = Number(txtf.value)
        let p = Number(txtp.value)
        if (p <= 0){
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f){
            //Contador crescente
            for (let c = i; c <=f; c += p)
            res.innerHTML +=`${c} \u{1F449}`
        } else {
            //Contador decrescente
            for (let c = i; c >=f; c -= p)
            res.innerHTML +=`${c} \u{1F449}`
        }
    }
       
}