
function carregar(){
    var msg = window.document.getElementById("msg");
    var img = document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var segundo = data.getSeconds();
    //var hora = 14;
    msg.innerHTML = `Agora sao <strong>${hora}:${minuto}:${segundo} horas</strong>.`;
    if(hora >= 0 && hora < 12){
        //BOM DIA!
       img.ser = "Bomdia.jpg";
       document.body.style.background = '#A98C6C' 

     }else if(hora >= 12 && hora <= 18){
        //BOA ATARDE!
        img.src="Boatarde.jpg" ;
        document.body.style.background = '#9CA7AD'
        

    } else {
        //BOA NOITE!
        
        img.src="Boanoite.jpg";
        document.body.style.background = '#261404'
    }
}