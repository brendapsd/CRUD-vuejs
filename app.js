// Variales globales

const formularioUI = document.querySelector('#formulario');
const listaActividadesUI = document.getElementById('listaActividades');

let arrayActividades = []; 

// Funciones

const CrearItem = (actividad) => {

    let item = {
        actividad: actividad,
        estado: false
    }

    arrayActividades.push(item); 

    return item
}

// EventListener

formularioUI.addEventListener('submit', (e) => {

    e.preventDefault(); 
    let actividadUI = document.querySelector('#actividad').value; 
})