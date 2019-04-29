import React from "react";
import "./scoreboard.css"

function Scoreboard(props) {
    return (

        <div className="row">
            <div className="col-md-6">
                <span className="float-right">Current Score: {props.score}</span>
            </div>
            <div className="col-md-6">
                <span className="float-left">Top Score:{props.topScore}</span>
            </div>
        </div>

    )
}

export default Scoreboard;