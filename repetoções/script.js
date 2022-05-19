function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert ('[ERRO] Dados faltando')
    } else{
        res.innerHTML = 'Contando'
        let i = Number(txti.value)
        let f = Number(txtf.value)
        let p = Number(txtp.value)

        for(let contador = i; contador <= f; contador += p )
        res.innerHTML += `${contador}\u{1F603}`
    }
}