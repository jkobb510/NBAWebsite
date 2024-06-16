          
 import "./molecules.css";
 import React from "react";
import Stat from "./Atoms/Stat/Stat";

class CardStats{
constructor( ppg, rpg, apg, height, weight) {
    this.ppg = ppg;
    this.rpg = rpg;
    this.apg = apg;
    this.height = height;
    this.weight = weight;
  }  
              
  getFullHeight() {
    return `${this.height} (${(this.height * 0.3048).toFixed(2)}m)`;
  }

  getFullWeight() {
    return `${this.weight}lb (${(this.weight * 0.453592).toFixed(1)}kg)`;
  }
  renderCardStats() {
    return (
          <div className="card-stats">
            <Stat label="PPG" value={this.ppg} />
            <Stat label="RPG" value={this.rpg} />
            <Stat label="APG" value={this.apg} />
            <Stat label="HEIGHT" value={this.getFullHeight()} />
            <Stat label="WEIGHT" value={this.getFullWeight()} />
          </div>      
    );
  }
}