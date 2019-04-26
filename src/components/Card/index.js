import React from "react";
import "./card.css";

function Card(props) {
    <div className="card" onClick={() => props.clickedImage(props.id)}>
        <div className="img-container">
            <img src={props.image} />

        </div>

    </div>
}

export default Card;