import React from 'react';
// import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import cards from "./components/Card/cards";
import allCardImages from './components/Card/cards';
// import Footer from "./components/Footer";

// import './App.css';

clickedImage(name){
  this.setState
}

function App() {

  return (
    <div>
      < Jumbotron />
      <div className="container">
        {allCardImages.map(image => {
          return (
            < Card name={image.name}
              url={image.url}
              clickedImage={clickedImage(image.name)} />
          )
        }
        )};

    </div>
    </div>
  )
}





export default App;
