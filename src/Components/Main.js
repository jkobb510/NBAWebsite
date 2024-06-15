import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import NBACard from "./NBACard/NBACard";
import CardButton from "./CardButton/CardButton.js";
import "./CardButton/CardButton.css";
import giannis from "./CardButton/giannis.jpg"
import luka from "./CardButton/luka.jpg"
import "./Main.css"


function Home({ onClick }) {
    return (
        <div className="main">
            <CardButton title="Your Team" onClick={onClick} imgSrc={giannis} />
            <CardButton title="Statistics" onClick={onClick} imgSrc={luka} />
        </div>
        
    );
}

function Main() {
    const [showCard, setShowCard] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/home") {
            setShowCard(false);
        }
    }, [location]);

    const handleButtonClick = () => {
        setShowCard(true);
    };

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={showCard ? <NBACard /> : <Home onClick={handleButtonClick} />} />
        </Routes>
    );
}

export default Main;
