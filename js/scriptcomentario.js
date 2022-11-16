function eliminarclass(){
    element.classList.remove("errorsubmit");
    element.classList.add("submit");
    parent.classList.remove("errorpagina");
}
function crearcomentario(texto,texto2){
    element = document.getElementById('submit');
    parent = document.getElementById('parent');
    element.style.setProperty("color", "");
    element.classList.remove("errorsubmit");
    if(texto.length>=1 && texto2.length>=1){
        element.classList.remove("errorsubmit");
        a1= "ya te mandaremos un mensaje " + texto;
        document.getElementById("capa").innerHTML=a1;
        element.classList.add("submit");
        element.style.setProperty("color", "green");
    }else{
        if(texto.length<1){
            element.classList.remove("submit");
            a1= "no introdujo nombre";
            document.getElementById("capa").innerHTML=a1;
        element.classList.add("errorsubmit");
        parent.classList.add("errorpagina");
        setTimeout(eliminarclass,100);

    
    
        }else{
            element.classList.remove("errorsubmit");
            element.classList.remove("submit");
            a1= "no introdujo numero";
            document.getElementById("capa").innerHTML=a1;
            element.classList.add("errorsubmit");
            parent.classList.add("errorpagina");
            setTimeout(eliminarclass,100);
    }
}

}