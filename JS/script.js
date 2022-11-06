const progreso = document.getElementById('progreso');
const anterior = document.getElementById('anterior');
const siguiente = document.getElementById('siguiente');
const circulos = document.querySelectorAll('.circle');

currentActive = 1; //variable para saber a qué nivel de los pasos vamos

siguiente.addEventListener('click', () =>{ //echucha el click y ejecuta una funcion
    currentActive++;

    if (currentActive > circulos.length){
        currentActive = circulos.length;    //con este if la variable currentActive nunca va a ser mayor a la cantidad de circulos
    }
});