// Librería de React
import React from "react";
// Librería que especifica en que ambiente trabajará React (DOM = Navegador Web)
import ReactDOM from "react-dom/client";
// Importar algún componente válido de react
// import App from './App';
// import ComponentePrincipal from './ComponentePrincipal';
// import { MiOtroComponentePrincipal } from './ComponentePrincipal';
// import { SuperComponente } from './ComponentePrincipal';
import { FirstApp } from "./FirstApp";

// Importar una hoja de estilo que se aplicará de forma global en los componentes de la aplicación
import "./main.css";

// Renderizar aplicación de React en algún nodo de nuestro documento HTML principal
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ComponentePrincipal /> */}
    {/* <MiOtroComponentePrincipal /> */}
    {/* <SuperComponente /> */}
    <FirstApp />
  </React.StrictMode>
);
