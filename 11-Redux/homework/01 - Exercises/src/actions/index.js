const { INCREMENTO, DECREMENTO } = require('../action-types');

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

const incremento = () =>{
  return {type: INCREMENTO } // estas action lo que vana a hacer es hacer las peticiones al servidor y mandarle esa informacion 
                              // al reducer para que lo modificialen el initialState
};
                                // envian una action y si es necesario un payload
const decremento = () =>{
  return {type: DECREMENTO}
};

module.exports = {
  incremento,
  decremento
}