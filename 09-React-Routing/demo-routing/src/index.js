import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';  // le indica a mi aplicacion que va a trabajar con rutas

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>   {/* BrowserRouter tiene que envolver a app en este caso / envuelve a la que contiene la informacion de todos */}
    <App />
  </BrowserRouter>
);

