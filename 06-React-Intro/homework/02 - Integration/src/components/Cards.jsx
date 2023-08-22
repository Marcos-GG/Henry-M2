import Card from './Card';

export default function Cards({characters}) {
   return (
      <div>
         {
            characters.map(({id, name, status , species, gender , origin, image }) =>{ // les pasamos las propiedades que card esta 
                                                   // esperando ya que los valores de cada uno los tiene characters dentro de un array de objetos 
               return (
                  <Card                  // por cada uno de los objetos (los personajes) se va a gebnerar un elemento card 

                     key={id}      // tenemos que darle una key a react para que pudea identificar las card por una "calve"
                                       // de otra manera serian todas las card igual y eso generaria problemas a la hora de trabajar sobre una en paricular 
                     id={id}        
                     name = {name}
                     status={status}
                     species={species}
                     gender={gender}
                     origin={origin.name}
                     image={image}
                     onClose={() => alert('Emulamos que se cierra la card')}
                  />
               )
            })
         }  
      </div>
   );
}
