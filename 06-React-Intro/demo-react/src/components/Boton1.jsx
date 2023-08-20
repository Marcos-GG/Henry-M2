const Boton1 = ({boton}) => {
    return (              // simepre tenemos que retornar algo 
        <button>{boton}</button>       // creamos la etiqueta boton y el valor que tiene es un estring pasado como props al Boton1
    )
}

export default Boton1;         // exportamos por default poorque es lo unico que tenemos para exportar 

/// boton Funcional
// se le puede hacer destructuring al props (boton) ... siempre el proprs llega como objeto