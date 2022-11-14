function alerta(){
    swal.fire({
    html: padre,
    height: '0%',
    confirmButtonText: false,
});
}

const padre = document.getElementById('padre');
const progresoContenedor = document.getElementById('progreso-contenedor');
const progreso = document.getElementById('progreso');
const anterior = document.getElementById('ant');
const siguiente = document.getElementById('sig');
const circulos = document.querySelectorAll('.circle');
const p = document.getElementById('p');

let currentActive = 1;
let currentActive2 = 1;
var acepto = "ACEPTO";

siguiente.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circulos.length){
        currentActive = circulos.length;
    }

    update();
});

anterior.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1){
        currentActive = 1;
    }

    update();
});

function cambiarTexto(){
    changeText.addEventListener('click', () =>{
        currentActive2++;
        if(currentActive2=2){
            p.textContent = 'HOLA MONDO';
        }
    
        update();
    });
}

function update(){
    circulos.forEach( (circulo, index) => {
        if (index < currentActive){
            circulo.classList.add ('active');
        }else{
            circulo.classList.remove('active');
        }
        
    })

    const actives = document.querySelectorAll('.active');

    progreso.style.width = ((actives.length -1) / (circulos.length -1))*100 + '%';

    /*if (currentActive === 1){
        anterior.disabled = true;
    }else if(currentActive === circulos.length){
        siguiente.disabled = false;
        siguiente.textContent = acepto;
    }else{
        anterior.disabled = false;
        siguiente.disabled = false;
        siguiente.textContent = 'SIGUIENTE';
        
    }*/

    if(currentActive===1){
        anterior.disabled = true;
        p.textContent = 'lorem y todo eso';
    }else if(currentActive === 2){
        p.textContent = 'hola';
        anterior.disabled = false;
    }else if(currentActive === 3){
        p.textContent = 'chau';
        anterior.disabled = false;
    }else if(currentActive === circulos.length){
        p.textContent = 'bienvenido';
        siguiente.disabled = false;
        siguiente.textContent = acepto;
        anterior.disabled = false;
    }else{
        anterior.disabled = false;
        siguiente.disabled = false;
        siguiente.textContent = 'SIGUIENTE'
    }
}


abecedario = Array['a','h','i','k','j','l','b','c','z','n','m','o','p','t','u'];

abecedario.sort((a,b) =>{
    if (a > b){
        return 1;
    }else if (a < b){
        return -1;
    }else{
        return 0;
    }
});

console.log(abecedario);




