/// boton por clase 
import React from 'react';     // el Class neesita importar a react si o si sino pasa a ser una clase normal 

class Boton2 extends React.Component{    /// es un extends de un componente de react 
    // constructor(boton){               // no es 100% necesario pero si se us cuando nuestro componente de clase esta recibiendo 
    //                                                     //propiedades 
    //     super(boton);
    // }


    render(){     // antes de pooner el return tengo que llamar a render 
        return (
            <>
            <button>{this.props.boton}</button>
            </>
        )
    }
}

export default Boton2;