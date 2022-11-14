
function crearcomentario(texto,texto2){
if(texto.length>=1 && texto2.length>=1){
a1= "ya te mandaremos un mensaje " + texto;
document.getElementById("capa").innerHTML=a1;
}else{
    if(texto.length<1){
    element = document.getElementById('submit');
    a1= "no introdujo nombre";
    document.getElementById("capa").innerHTML=a1;
    element.style.setProperty('color','red');
    element.style.setProperty( 'transform','scale(0.98s)');
    element.style.setProperty('position','relative');
    element.style.setProperty('animation-name','mover_boton');
    element.style.setProperty('animation-duration','0.1s'),
    element.style.setProperty('animation-timing-function', 'linear');
    
    }else{
        element = document.getElementById('submit');
    a1= "no introdujo numero";
    document.getElementById("capa").innerHTML=a1;
    element.style.setProperty('color','red');
    element.style.setProperty( 'transform','scale(0.98s)');
    element.style.setProperty('position','relative');
    element.style.setProperty('animation-name','mover_boton');
    element.style.setProperty('animation-duration','0.1s'),
    element.style.setProperty('animation-timing-function', 'linear');
    }
}
}