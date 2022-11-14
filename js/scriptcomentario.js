
function crearcomentario(texto,texto2){
if(texto.length>=1 && texto2.length>=1){
a1= "ya te mandaremos un mensaje " + texto;
document.getElementById("capa").innerHTML=a1;
}else{
    if(texto.length<1){
    a1= "no introdujo nombre";
    document.getElementById("capa").innerHTML=a1;
    }else{
    a1= "no introdujo numero";
    document.getElementById("capa").innerHTML=a1;
    }
}
}