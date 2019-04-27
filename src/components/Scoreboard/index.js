import React from "react";

function Scoreboard(props) {
    return (

        <div className="row">
            <div className="col-md-6">
                <span>Current Score: {props.score}</span>
            </div>
            <div className="col-md-6">
                <span>Top Score:{props.topScore}</span>
            </div>
        </div>

    )
}

export default Scoreboard;