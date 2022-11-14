
function crearcomentario(texto,texto2){


if(texto.length>=1 && texto2.length>=1){
element = document.getElementById('submit');
element.classList.remove("submit2");
a1= "ya te mandaremos un mensaje " + texto;
document.getElementById("capa").innerHTML=a1;
element.classList.add("submit");



}else{
    if(texto.length<1){
    element = document.getElementById('submit');
    element.classList.remove("submit");
    a1= "no introdujo nombre";
    document.getElementById("capa").innerHTML=a1;
    element.classList.add("submit2");
    
    
    }else{
    element = document.getElementById('submit');
    element.classList.remove("submit");
    a1= "no introdujo numero";
    document.getElementById("capa").innerHTML=a1;
    element.classList.add("submit2");
    }
}

}