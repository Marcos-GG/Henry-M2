
const Alumnos = ({alumnos, grupo}) => {          // props es lo que recibe alumnos por paramtro y SIEMPRE llega como objeto por reso podemos hacer 
                                // destructuring 
                                // nombre siempre la primera letra en mayuscula 
    return (                    // siempre vamos a retornar un solo componente / etiqueta
        <>
           <h3>Alumnos:{grupo}</h3>                {/*agregamos a el objeto grupo que viene de amigos como props , las {} son porque asi podemos meter lenguaje js   */}

            

           {
            alumnos.map(alumno=>{         /* alumnos al ser un array de objetos lo podemos recorrer con .map  */
                return (                    /* siempre tenemos que retornar algo */
                    <div>                                       {/* em este caso lo que estamos retornando es que por cada iteracion que haga (alumno) vamos a crear un div , dentro un <p> y un <span> */}
                        <p>{alumno.name}</p>                  {/* p lleva alumno.name (accedemos de esta manera al ser un objeto) */}
                        <span>{alumno.edad}</span>        {/* lo mismo pero accedemos al valor de edad */}
                    </div>
                )
            })
           }
        </>
    )
}


export default Alumnos;    /// vamos a exportar para poder renderizar nueestro componente 