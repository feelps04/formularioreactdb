import React from 'react';
import "./components/css.css"
import Header from './components/header'; // Importe o componente Header
import Titulo from './components/titile'; // Importe o componente Titulo
import RowContainer1 from './components/row-container1'; // Importe o componente RowContainer1
import H2 from './components/h2';
import RowContainer2 from './components/row-container2'; // Importe o componente RowContainer2
import Title2 from './components/title2'; // Importe o componente Title2
import Title3 from './components/title3'; // Importe o componente Title3
import Title4 from './components/title4'; // Importe o componente Title4
import Title5 from './components/title5'; // Importe o componente Title5
import Button from './components/button';

function App() {
  return (
    <div className="App">
      <Header />
     
      <form> 
      <Titulo />
          <RowContainer1 />
          <H2 />
          <RowContainer2 />
          <Title2 />
          <Title3 />
          <Title4 />
          <Title5 />
          <Button/>
      </form>
    
    </div>
  );
}

export default App;