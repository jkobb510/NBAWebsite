import React, { useState } from "react";
import NBACard from "./NBACard";
import CardButton from "./CardButton";
import "./NBACard.css";

function NBACardContainer() {
    const [showCard, setShowCard] = useState(false);

    const handleButtonClick = () => {
        setShowCard(true);
    };

    return (
        <div>
            {showCard ? <NBACard /> : <CardButton onClick={handleButtonClick} />}
        </div>
    );
}

export default NBACardContainer;