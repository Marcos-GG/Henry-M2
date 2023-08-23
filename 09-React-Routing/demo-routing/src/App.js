
import './App.css';
import {Routes , Route} from 'react-router-dom'; 
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Person from './components/Person';



function App() {
  return (
    // para definir las rutas 
    <Routes>      {/* routes va a contener todas las rutas */}
                  {/* cada una va a ser Route */}
      
      <Route path='' element={<Home/>}/>   {/* dejamos el path vacio para que el coponente home tome ese lugar para mostrarse */}   
      <Route path='/about' element={<About/>}/>
      <Route path='/profile' element={<Profile/>}> 
        <Route path=':person' element={<Person/>}/>   {/* usando los ":" hacemos dinamismo , desde profile mostramos person */}
      </Route>
                                {/* al darle dinamismo ":" si el usuario escribe cualquier cosa en la ruta es llevarlo siempre a la misma pagina osea al mismo componente */}
    </Routes>
  );
}

export default App;
