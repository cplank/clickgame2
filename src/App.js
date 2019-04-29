import React, { Component } from "react";

import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import cards from "./components/Card/cards";
import allCardImages from './components/Card/cards';
// import Footer from "./components/Footer";

import './App.css';



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

  resetGame() {
    this.setState({
      score: 0,
      ...cards.reduce((allCardImages, card) => {
        return {
          ...allCardImages,
          [card.name]: undefined
        }
      }, {})
    })
  }



  clickedImage(name) {
    //update state (push the image name into the array)
    //if the image hasn't been clicked before, increase the score
    console.log('wtf', this);
    this.setState((state, props) => {
      if (state[name] === undefined) {
        // not clicked 
        let newTopScore = this.state.topScore
        if (this.state.score >= this.state.topScore) {
          newTopScore = this.state.score + 1
        }

        return {
          score: state.score + 1,
          [name]: "clicked",
          topScore: newTopScore
        }
      }
      else {
        this.resetGame();
      }




    });
    // this.setState({ score: this.state.score + 1 })
    this.shuffleCards(allCardImages);

  }


  render() {

    return (
      <div>
        < Jumbotron
          score={this.state.score}
          topScore={this.state.topScore} />
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
            )}
          </div>
        </div>
      </div>

    )
  }
}





export default App;
