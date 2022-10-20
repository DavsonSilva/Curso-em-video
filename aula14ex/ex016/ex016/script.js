function contar(){
    var inicio = document.getElementById("txti");
    var fim = document.getElementById("txtf");
    var passo = document.getElementById("txtp");
    var res = document.getElementById("res");
   if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    res.innerHTML = 'Impossivel contar, verifique se tem algum campo vazio =D';
    //window.alert('[ERROR] Faltam Dados, verifique e tente novamente!')
        
    } else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo invalido! Considerando PASSO 1')
            P = 1
        }
        if(i < f){
            //Contagem crescente
            for (let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}` 
            }
        } else {
            //Contagem decrescente
            for (let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}` 
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}