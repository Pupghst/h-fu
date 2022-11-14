
function crearcomentario(texto,texto2){


if(texto.length>=1 && texto2.length>=1){
element = document.getElementById('submit');
a1= "ya te mandaremos un mensaje " + texto;
document.getElementById("capa").innerHTML=a1;

element.style.property('color','green');

}else{
    if(texto.length<1){
    element = document.getElementById('submit');
    a1= "no introdujo nombre";
    document.getElementById("capa").innerHTML=a1;
    element.classList.add("submit2");
    
    
    }else{
    element = document.getElementById('submit');
    a1= "no introdujo numero";
    document.getElementById("capa").innerHTML=a1;
    element.classList.add("submit2");
    }
}

}