import React from "react";
import "./App.css";

//COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import ItemlistContainer from "./components/itemListContainer/itemListContainer";


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

        <div className="Card__grid">
          <ItemlistContainer 
          img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvMSQO5GCAB3IVsBUpIuzixFo9SrNpdKGVaQ&usqp=CAU"
          name="Moka Italina"
          description="Ideal para cafés intensos en la mañana antes de entrenar"
          precio="$9.800"
          comprar="COMPRAR"
          />  
        
          <ItemlistContainer 
          img="https://dhb3yazwboecu.cloudfront.net/1036/articulos/hario-v60-retocada.jpg" 
          name="V-60"
          description="La preferida de la mayoría de los Baristas. Nos permite degustar cada olor, sabor y aceitosidad del café"
          precio="$7.600"
          comprar="COMPRAR"
          /> 

          <ItemlistContainer 
          img= "https://cafemalist.com//wp-content/uploads/2020/03/prensa-francesa-con-taza-de-caf%C3%A9.jpg" 
          name="Prensa Francesa"
          description="Única en su estilo. Esta cafetera nos permite realizar Cold Brew, utilizando molienda gruesa, brindando mas aceitocidad"
          precio="$9.800"
          comprar="COMPRAR"
          /> 
        </div>
      </div>      
    );
  }
}

export default App;