//Sistema para ver a hora e desejar uma bom dia

var agora = new Date();
var hora = agora.getHours();
console.log(`Agora sao exatamento ${hora} horas`)
if (hora < 12){
    console.log('Boa madrugada!')
}else if(hora < 12){
    console.log('Bom dia!')
} else if (hora < 18){
    console.log('Boa tarde!')
} else {
    console.log("Boa noite!")
} 