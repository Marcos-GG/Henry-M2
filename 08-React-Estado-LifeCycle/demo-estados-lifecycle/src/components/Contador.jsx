import React from "react";    // simepre que vamos a usar class tenemos que llamar (importar) a react


class Contador extends React.Component {
    constructor(props) {
        super(props)
        this.state = {          // this.state es para declarar un estado , es paralbra reservada , siempre tengo que escribirlo desntro del constructor 
            counter: 0,
            saludo: "hola, bienvenidos al contador"
        }
    }

    // queremos que al hacer click en el boton Aumentar State counter aumente uno , para eso react nos da una palabra reservada 
    // para hacer esa funcion necesitamos logiacamente una function 
    clickState = () => {
        this.setState({counter: this.state.counter + 1, /* saludo: "me actualicé" */});       
                                    // setState es la palabra reservada para poder modificar un estado y lo escribimos entre {} porque . dentro del setState podemos modficar mas de un estado porque ejemplo el saludo
                                    // estate (estado) siempre va a ser un objeto 
                                    // en esat funcion hacemos que aumente en uno cada vez que hacemos un click 
    }

    componentDidMount(){   // lo usamos para mostrar algo en pantalla una unica vez cuando se actualiza la pagina , no se vuelve a mostar o ejecutar hasta que se actualice la pagina nuevamente \
        // console.log("hola me actualice ")

    }

    componentDidUpdate(){         // lo usamos para actualizar el estado , le indicamos que sucedan cosas en distintos ciclos de vida de mi componente , se ve la modificacion siempre que se actualice algo 
        // console.log(`me actualice, el estado ahora es: ${this.state.counter}`);
    }

    componentWillUnmount(){     // de desmonta (se deja de ver el componente) cuando reacargamos la paguina 
        console.log("me desmonte");
    }

    render(){                 // siempre se necesita usar un render 
        return(
            <div>
                <h1>CLASS COMPONENT</h1>
                <h3>{this.state.saludo}</h3>
                <p>{this.state.counter}</p>
                <button onClick ={this.clickState} >Aumentar State</button> {/* onClick es para crear un evento....es lo mismo que usar addeventlistener */}
            </div>
        )
    }
}


export default Contador; // default poque solo tengo una cosa para exportar 

// que se actualize el dom en la pagina (osea que el dom interno de react modifique algo) se lo conoce como re-renderizado