// para poder entrar a person desde profile 
import { NavLink , Outlet } from "react-router-dom"; // outle permite que un componente se muestre dentro de otro sin cambiar la ruta
// otros : useNavigate (lo mismo que link pero se usa con el evento onClick) , useParams : es un objeto que devuelve aquellos datos ingresados desde la url como parametros , useLocation : Nos dice en que ruta esta parado el usuario

const Profile = () => {
    return (
        <div>
            <h1>Este perfil pertenece a Marcos</h1>
            <h2>Alumno Henry cohorte 42a</h2>

            <button>
                <NavLink to="person">Person</NavLink> {/*  sin la barra asi no cambia la ruta "profile" en la que estamos parados */}
            </button>
            <button>
                <NavLink to="/">Back</NavLink> {/* de esta manera volvemos a la ruta principal  */}
            </button>

        <Outlet/>          
        </div>
    )
}



export default Profile;