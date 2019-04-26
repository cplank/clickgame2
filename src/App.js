import React from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Footer from "./components/Footer";

// import './App.css';

function App() {
  return (

    <div>
      <Navbar />
      <Jumbotron />
      <div className="container">
        <Card />
      </div>
      <Footer />
    </div>

  );
}

export default App;
