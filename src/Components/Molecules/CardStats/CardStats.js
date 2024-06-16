import "./Molecules/molecules.css";
import React from "react";
import Stat from "./Atoms/Stat/Stat";

const CardStats = ({ ppg, rpg, apg, height, weight }) => {
  const getFullHeight = () => {
    return `${height} (${(height * 0.3048).toFixed(2)}m)`;
  };

  const getFullWeight = () => {
    return `${weight}lb (${(weight * 0.453592).toFixed(1)}kg)`;
  };

  return (
    <div className="card-stats">
      <Stat label="PPG" value={ppg} />
      <Stat label="RPG" value={rpg} />
      <Stat label="APG" value={apg} />
      <Stat label="HEIGHT" value={getFullHeight()} />
      <Stat label="WEIGHT" value={getFullWeight()} />
    </div>
  );
};

export default CardStats;