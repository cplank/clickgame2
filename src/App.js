// Bringing in all the imports
import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import cards from "./components/Card/cards";
import allCardImages from './components/Card/cards';
import './App.css';

// creating a class component for the app
class App extends Component {
  constructor(props) {
    super(props)
    //setting the initial state
    this.state = {
      cards,
      score: 0,
      topScore: 0
    }
    //I had to bind the clickedImage method to App because otherwise THIS was the window (since it's triggered by an onClick)
    this.clickedImage = this.clickedImage.bind(this);
  }

  //the function that shuffle's the cards. This is something called the Fisher-Yates shuffle algorithm
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

  //the function that resets the game
  resetGame() {
    this.setState({
      //setting the score back to 0
      score: 0,
      //the Spread here is calling reduce on each instance of cards.
      ...cards.reduce((allCardImages, card) => {
        return {
          //here, Spread is adding undefined to each instance of card using the name of the card as the key. 
          ...allCardImages,
          [card.name]: undefined
        }
        //the new object for allCardImages
      }, {})
    })
  }

  //this is the function that runs when an image is clicked
  clickedImage(name) {
    //update state (push the image name into the array)
    //if the image hasn't been clicked before, increase the score

    //changing the state (passing props, but I don't use it???)
    this.setState((state, props) => {
      //if the name is undefined, it means the image hasn't been clicked
      if (state[name] === undefined) {
        //if not clicked, check if the current score is greater than the topScore. If it is, change topScore to score
        let newTopScore = this.state.topScore
        if (this.state.score >= this.state.topScore) {
          //this was confusing, but newTopScore has to be the ~future instance~ of state, which will be score +1
          newTopScore = this.state.score + 1
        }
        //if the above is all true, change the score, add "clicked" to the card object, and reflect the new topScore
        return {
          score: state.score + 1,
          [name]: "clicked",
          topScore: newTopScore
        }
      }
      //otherwise, rest the game!
      else {
        this.resetGame();
      }

    });
    // shuffle the cards regardless of what happens
    this.shuffleCards(allCardImages);

  }

  //render the app
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
