// para que nos lleve de una ruta a la otra tenemos que importar lo siguiente 

import { NavLink } from "react-router-dom";



const Home = () => {
    return (
        <>
            <h1>Este es el componente HOME</h1>  

            <button>
                <NavLink to='/about' >About</NavLink>   {/*  de esta manera indicamos que ese boton nos lleve a la ruta about */}
            </button>
            <button>
                <NavLink to='/profile' >Profile</NavLink>
            </button>      
        </>
    )
};





export default Home ;