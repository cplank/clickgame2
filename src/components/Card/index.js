import React from "react";

import "./card.css";

const cardStyle = {
    width: "12em"
}

function Card(props) {
    return (

        <div className="col-md-3">
            <div className="card" style={cardStyle} onClick={() => props.clickedImage(props.name)}>
                <div className="img-container">
                    <img src={props.url} style={cardStyle} />
                </div>
            </div>
        </div>

    )
}

export default Card;