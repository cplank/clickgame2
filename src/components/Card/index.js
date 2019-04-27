import React from "react";

import "./card.css";

function Card(props) {
    return (
        <div className="card" onClick={() => props.clickedImage(props.name)}>
            <div className="img-container">
                <img src={props.url} />
            </div>
        </div>
    )
}

export default Card;