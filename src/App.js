import React from "react";
import "./App.css";
//COMPONENTS

import NavBar from "./components/NavBar/NavBar";
class App extends React.Component {
  render () {
    return (
      <div className="App">
        <NavBar 
        logo= "Long Black Coffee Roasters"
        components = "Productos"
        foro = "Foro"
        login = "Sing-up"
        compras= "Mis Compras"
        contacto= "Contacto"
        />
      </div>  
    );
  }
}

export default App;