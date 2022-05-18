function verificar(){
  var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //crianca
                img.setAttribute('src', 'cri-menino.jpg')
            }else if(idade <21){
                //jovem
                img.setAttribute('src', 'ado.menino.jpg')
            }else if(idade <50){
                //adulto
                img.setAttribute('src', 'adul.homem.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'ido.homem.jpg')
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //crianca
                img.setAttribute('src', 'cri.menina.jpg')
            }else if(idade <21){
                //jovem
                img.setAttribute('src', 'ado.menina.jpg')
            }else if(idade <50){
                //adulto
                img.setAttribute('src', 'adul.mulher.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'ido.mulher.jpg')
            }
        }
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
  
}