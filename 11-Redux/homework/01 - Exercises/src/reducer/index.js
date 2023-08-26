const { INCREMENTO, DECREMENTO } = require('../action-types');

const initialState = {
  contador: 0
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creatñor. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

function contador(state = initialState, action) {    // action hace referencia a el objeto que envio la funcion (incremento/decremento)
                                                    // entonces podemos hacer destructuring de action que seria ({type , payload})
  switch (action.type) {   // valores de action type
    case INCREMENTO: 
      return {
        ...state,
       contador: state.contador + 1
      }

    case DECREMENTO: 
      return {
        ...state,
        contador: state.contador -1
      }

    default: 
      return  {  // caso default sirve para que si no se cumple ninguno de los casos anteriores vamos a devolver una copia de lo que ya tenemos (initialState)
        ...state  
      }
    }
}

module.exports = contador;