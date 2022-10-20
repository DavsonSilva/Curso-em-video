function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        var fsex =document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if(fsex[0].checked){
            genero = "Homem"
            if(idade >= 0 && idade <= 10){
                //crianca
                 img.setAttribute('src', 'crianca-menino.jpg');
            }else if(idade <= 21){
                //Jovem
                img.setAttribute('src', 'adolecente-menino.jpg');
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-menino.jpg');
            }else{
                //Idoso
                img.setAttribute('src', 'velho-menino.jpg');
            }
        }else if(fsex[1].checked) {
            genero = "Mulher"
            if(idade >=0 && idade <= 10){
                //crianca
                 img.setAttribute('src', 'crianca-menina.jpg');
            }else if (idade <= 21){
                //Jovem
                 img.setAttribute('src', 'adolecente-menina.jpg', textAlign);
            } else if (idade < 50){
                //adulto
                 img.setAttribute('src', 'adulta-menina.jpg');
            }else{
                //Idoso
                 img.setAttribute('src', 'velha-menina.jpg');
            }
        }
        //res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img);
    }
}