
import './App.css';
import Title from './components/Title';
import Alumnos from './components/Alumnos';
import Boton1 from './components/Boton1';
import Boton2 from './components/Boton2';

function App() {
  
  const alumnos = [                // podemos crear un arreglo de objetos y pasasrselo al return de app que es el encargador de retornar lo que queremos mostrar en pantalla (render)
    {name: "marcos", edad: 23},
    {name: "daniel", edad: 23},
    {name: "garcia", edad: 23},
    {name: "brenda", edad: 21},
    {name: "diana", edad: 21},
  ]



  return (
    <div>
      <Title/>,
      <Alumnos alumnos= {alumnos} grupo = "42a"/>  {/* para pasarle el array alumno debemos escribirlo como si fuera el atributo de una etiqueta hatml , lugo el valor de ese atibuto va a ser el nombre de la variable que contiene ese array y este lo vamos a escribir dentro de dos llaves para poder escribir lenguaje javascript */}
      <Boton1 boton= "boton Funcional"/> 
      <Boton2 boton = "boton por clase"/>
    </div>
  );
}

export default App;  // exportamos por default app que lo va a estart importando index.js que es el encargado de mostrar todo en pantalla(render) index es el elemento independiente 
