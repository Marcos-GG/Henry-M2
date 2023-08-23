// en un componente funcional no tenemos que usart "this.estate" , porque eso es SOLO PARA CLASS , en cambio en un componente funcional nosotros le podemos decir al estado como se va llamar 
// para esto nos ayudan los hooks . SON UNICAMENTE DE USO PARA COMPONENTE FUNCIONALES 

import { useState ,useEffect } from "react";   // me traigo una parte de react por eso hacemos el destructuring
// a esto se le conoce como hooks
// useEffect son los ciclos de vida , tengo los tres metodos que estan separados si uso class en uno solo 


const Counter = () => {
    // para usar el "useState" necesitamos hacer el destructuring de un array 
    // en la primer posicion osea el pirmer parametro del useState va a ser el nombre de mi estado \
    // en la SEGUNDA posicion va al nombre de la funcion que me vga a dejar modifica ese estado "setState" pero lo llamamos como queremos ...por conveniencia lo nombramos con "set" seguido del nombre de nuestro estado

    const [count , setCount] = useState(0); // useState nos retorna un array ... dentro de () podemos indicar el valor inicial que queremos que tenga nuestro estado por ejemplo 0 
    
    const aumentaCount = () =>{          // function para aumetnar de uno en uno en count 
        setCount(count + 1);
    }

    useEffect(()=>{      /// este hook recibe dos parametros . el primero es un calback y el segundo es un array que se llama 
                            // array de dependencia 
                        // me permite manipular los tres cilos de via 
                        // lo que escriba dentro del hook va a ser el montaje (componentDidMount)
        console.log("se monto el componente funcional");   // montaje


        //return () => alert("se desmonta")   // lo que yo escriba dentro del return va a ser el desmontaje (componentWillMount),
                                            // pirmero que nada tiene que ser un callback

    },[count]);     // [] esto seria el array de dependencia y lo que escriba dento del array de dependiencia va a ser la actualizacion (componentDidUpdate)  // la actualizacion de mi componente depende de mi estado y en este caso mi estado es count
               // puede ser las propiedades , el estado o ambas  por que mi estado se actualiza unicamente si hay propiedades nuevas o si sucede un cambio en el estado 
    
    return (
        <div>
            <h1>FUNCTION COMPONENT</h1>
            <p>{count}</p>
            <button onClick={aumentaCount}>Aumentar</button>

        </div>
    )
}






export default Counter;


// si trabajamos con un compponente podemos tener muchos estados 
// UN SOLO USEEFECT POR COMPONENTE 