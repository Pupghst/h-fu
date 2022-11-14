
function crearcomentario(texto,texto2){
if(texto.length>=1 && texto2.length>=1){
capa = document.getElementById("capa");
h1 = document.createElement("h1");
a1= "ya te mandaremos un mensaje " + texto;
h1.innerHTML = a1;
capa.appendChild(h1);
}else{
    if(texto.length<1){
    capa = document.getElementById("capa");
    h1 = document.createElement("h1");
    a1= "no introdujo nombre";
    h1.innerHTML = a1;
    capa.appendChild(h1);
    }else{
        capa = document.getElementById("capa");
    h1 = document.createElement("h1");
    a1= "no introdujo numero";
    h1.innerHTML = a1;
    capa.appendChild(h1);
    }
}
}