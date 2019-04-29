import React from "react";
import Scoreboard from "../Scoreboard";
import "./jumbotron.css";

function Jumbotron(props) {
    return (
        <div className="container-fluid">
            <div className="header-text">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center">She-Ra</h1>
                        <h3 className="text-center">Memory Game</h3>
                    </div>
                </div>
                <div className="row" id="instructions">
                    <div className="text-center col-md-4">
                        <span>Click on an image to earn points</span>
                    </div>
                    <div className="text-center col-md-4">
                        <span>Click the same image twice, you lose!</span>
                    </div>
                    <div className="text-center col-md-4">
                        <div className="score">
                            <Scoreboard
                                score={props.score}
                                topScore={props.topScore}
                            >

                            </Scoreboard>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Jumbotron;