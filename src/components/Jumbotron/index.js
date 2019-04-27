import React from "react";
import Scoreboard from "../Scoreboard";
import "./jumbotron.css";

function Jumbotron() {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4"></hr>
            <div className="score float-right">
                <Scoreboard>

                </Scoreboard>
            </div>

        </div>
    )
}

export default Jumbotron;