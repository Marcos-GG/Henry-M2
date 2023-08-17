const [boton] = $("#boton");  // jquery me trae el elemento en un array por eso usamos destructuring 
const [input] = $("#input");

const [search] = $("#search"); // traemos al boton search para buscar el id 

const url = "http://localhost:5000/amigos" ; // guardamos la url en una variable para poder reutilizarla de una manera mas limpia 

const [deleteBtn] = $("#delete");     // llamamos al boton delete porque tenemos que borrar a  un amigo 




const crear = (friends) => { // friends llega en forma de array con objetos 
   
    const [lista] = $("#lista");  /// "lista" es el id de ul , lo traemos con jquery (lo devuelve en forma de array) " $("#lista")"
    lista.innerText = ""           /// luego de crear la funcion borrar , borramos la lista y entonces se muestra una nueva 
                                                                    // sin el amigo borrado
    friends.forEach(friend =>{                   // recorremos el array friends con un forEach y friend hace referencia a cada amigo 
                                                    // que va iterantdo (es un nombre descriptivo);
        const newLi = document.createElement("li");   // por cada amigo creamos una li 
        newLi.innerText = friend.name;              // necesitamos agregarle texto a las li para poder mostar cada nome de un amigo
        lista.appendChild(newLi);               // u ahora a la "ul" le vamos agregando cada li 
    })
    
};


const getAmigos = () => {
    $("#lista").empty();
    $.get( url , crear )                        // crear va a ser un callback ... que recibe la respuesta de esa ruta 
}

const searchFriends = () => {
    const [input] = $("#input"); // nos traemos al input (numero que quiero buscar de id) 
    const id = input.value;      // numero que quiero de id para buscar al amigo que coincida con ese numero 

    input.value = "";      // vaciamos el imput para que quede limpio , esto es una buena practica     
 
    $.get(`${url}/${id}`, (friends) =>{  // traemos la url y le agregamos el numero de id que queremos buscar escrita por el input
        const [amigo] = $("#amigo"); // llamamos al span para agregarle el amigo que se pide por id
        amigo.innerText = friends.name
    });       
    
}

const deleteFriends = () => {    // creamos la funcion 
    const [inputDelete] = $("#inputDelete"); // traa al input 
    const id = inputDelete.value ;     // nos trameos el valor (en este caso numero) ingresado en ese inputDelete
    inputDelete.value = "";            // vaciamos el valor del input (si pusieron pj 3 , se borra y queda vacio)
    
    $.ajax({
        type: "DELETE",            /// le pedimos que borre 
        url: `${url}/${id}`,           /// le pasamos el id 
        success: (friends) => {    //  friends es la palabra que guarda la repuesta que da la url 
            crear(friends)       /// le pasamos la funcion crear porque es el que tiene la lista de amigos y desde ahi lo borra 
                                        // osea ya no va a estar en ese lista de amigos 

            const [success] = $("#success")
            success.innerText = "Su amigo ah sido borrado con exito."
        }
    })

};




boton.addEventListener("click", getAmigos ); // siempre recibe dos parametros ... la accion y la reaccion 
                                            // le creamos el evento y cuando se haga click se va a ejecutar getAmigos y vamos 
                                            // a tener lo que devuelva la url 
 

search.addEventListener("click", searchFriends); // creamos el evento para el boton search 


deleteBtn.addEventListener("click" , deleteFriends); // creamos el avento 



/// tuvimos un problema : cada vez que se ajecutaba el addEventListener() de "boton" se cargaba la lista de amigos y eso generaba una lista de amigos una debajo de la otra ..... Para solucionarlo ustilizamos el metodo empty(limpiar) 
    // Lo colocamos dentro de getAmigos porque cada vez que se ajecutaba el addEventListener() del boton ejecutaba getAmigos y este ejecutaba a "crear"... entonces al poner empty() dentro de getAmigos , cada vez que se ejecutaba boton "ver amigos" este primero lo liompa (en otras palabra .. borro la lista de amigos que ya se mostraba en el DOM ) y seguido se ejecutaba el get con su url y la funcion callback "crear" .... entonces lo que esta haciendo en borrar y volveer a crear ... borrar y volver a crear , por eso en pantallla siemore vemos la misma cantidad de amigos . 
    // dato : si usamos const o let no funciona empty(), tenemos que aplicarselo directamente a el array $("#lista"); lista es el id de ul 