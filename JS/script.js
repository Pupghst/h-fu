const progreso = document.getElementById('progreso');
const anterior = document.getElementById('ant');
const siguiente = document.getElementById('sig');
const circulos = document.querySelectorAll('.circle');

let currentActive = 1; //variable para saber a qué nivel de los pasos vamos

siguiente.addEventListener('click', () => {  //escucha el click y ejecuta una funcion
    currentActive++;

    if (currentActive > circulos.length){
        currentActive = circulos.length;    //con este if la variable currentActive nunca va a ser mayor a la cantidad de circulos
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

function update(){
    circulos.forEach( (circulos, index) => {
        if (index < currentActive){
            circulos.classList.add('active');
        }else{
            circulos.classList.remove('active');
        }
        
    });
}