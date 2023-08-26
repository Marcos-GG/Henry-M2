const { createStore } = require("redux");
const contador = require("./reducer");
const { incremento, decremento } = require("./actions");

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
const store = createStore(contador)

// Obtenemos el elemento con el id `valor`.
const valor = document.getElementById("valor")

// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
  const estadoActual = store.getState().contador    // getState = devuelve un objeto, nos muestra el estado actual al que se lo aplicamos , en este caso todo lo que tiene el archivo reducer (initialState , fn contador) estan siendo guardados en la variable "contador" , a su vez la variable contador esta siendo guardada dentro de la variable "store" 
  // al hacer store.getState() ... getState nos esta devolviendo el obj "initialState" y luego por eso con el "." entramos a la propiedad contador 


  // ahora tenemos que guaradar el valor de contador guardado en "estadoActual" en la variable "valor" para darselo como texto 
  valor.innerText = estadoActual
}
renderContador() 

// Ejecutamos la función 'renderContador':

// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:

store.subscribe(renderContador)  // llamamos subscribe a cuando accede a la informacion que contienen STORE en este caso 
                    // en esta linea de codigo le estamos diciendo a renderCotador que quede atento a la informacin que tiene store 
                    // sotre tine al estado actual


// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:

document.getElementById('incremento').addEventListener('click', () => {store.dispatch(incremento())})

document.getElementById('decremento').addEventListener('click', () => {store.dispatch(decremento())})


document.getElementById("incrementoImpar").addEventListener("click", () => {
  const estadoActual = store.getState();
  if (estadoActual.contador % 2 !== 0) {
    store.dispatch(incremento());
  }
});


document.getElementById("incrementoAsync").addEventListener("click", () => {
  setTimeout(() => {
    store.dispatch(incremento());
  }, 1000)}); 