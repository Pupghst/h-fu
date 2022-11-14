
function crearcomentario(texto){
capa = document.getElementById("capa");
h1 = document.createElement("h1");
h1.innerHTML = texto;
capa.appendChild(h1);
}