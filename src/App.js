import React, { Component } from "react";
// import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import cards from "./components/Card/cards";
import allCardImages from './components/Card/cards';
// import Footer from "./components/Footer";

// import './App.css';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards,
      score: 0,
      topScore: 0
    }
    this.clickedImage = this.clickedImage.bind(this);
  }

  // shuffleCards = cards => {
  //   let newCards = cards.sort(function (a, b) {
  //     return 0.5 - Math.random()
  //   })
  //   return newCards;
  // }

  shuffleCards(cards) {
    var j, x, i;
    for (i = cards.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = cards[i];
      cards[i] = cards[j];
      cards[j] = x;
    }
    return cards;
  }

  clickedImage(name) {
    //update state (push the image name into the array)
    //if the image hasn't been clicked before, increase the score
    console.log('wtf', this);
    this.setState((state, props) => {
      if (state[name] === undefined) {
        // not clicked     

        return {
          score: state.score + 1,
          [name]: "clicked"
        }
      }
      return { score: state.score, }
    });
    // this.setState({ score: this.state.score + 1 })
    this.shuffleCards(allCardImages);

  }


  render() {

    return (
      <div>
        < Jumbotron />
        <div className="container">
          <div className="row">
            {allCardImages.map(image => {
              return (
                < Card name={image.name}
                  key={image.name}
                  url={image.url}
                  clickedImage={this.clickedImage} />
              )
            }
            )};
          </div>
        </div>
      </div>

    )
  }
}





export default App;
