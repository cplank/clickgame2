import React from "react";
import "./scoreboard.css"

function Scoreboard(props) {
    return (

        <div className="row">
            <div className="col-md-6 float-right">
                <span>Current Score: {props.score}</span>
            </div>
            <div className="col-md-6 float-left">
                <span>Top Score:{props.topScore}</span>
            </div>
        </div>

    )
}

export default Scoreboard;