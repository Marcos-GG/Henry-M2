import React from 'react';
import ReactDOM from 'react-dom/client'; // este es el virtual dom de react 
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));  // root es raiz , llama al elemento del html con el id root
root.render(                      // renderiza root osea lo muestra en patalla y muestra lo que tenga app
                              
    <App />
  
);

