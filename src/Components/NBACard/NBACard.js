import React from "react";
import "./NBACard.css";
import Stat from "../Atoms/Stat/Stat";


class Player {
  constructor(name, team, years, position, ppg, rpg, apg, height, weight, imgSrc) {
    this.name = name;
    this.team = team;
    this.years = years;
    this.position = position;
    this.ppg = ppg;
    this.rpg = rpg;
    this.apg = apg;
    this.height = height;
    this.weight = weight;
    this.imgSrc = imgSrc;
  }

  getFullHeight() {
    return `${this.height} (${(this.height * 0.3048).toFixed(2)}m)`;
  }

  getFullWeight() {
    return `${this.weight}lb (${(this.weight * 0.453592).toFixed(1)}kg)`;
  }

  renderCard() {
    return (
      <div className="nba-card">
        <img loading="lazy" src={this.imgSrc} alt={this.name} />
        <div className="card-content">
          <div className="playerName">{this.name}</div>
          <div className ="playerTeam">{this.team} ({this.years})</div>
          <div className="playerPosition">Position: {this.position}</div>
          <div className="card-stats">
            <Stat label="PPG" value={this.ppg} />
            <Stat label="RPG" value={this.rpg} />
            <Stat label="APG" value={this.apg} />
            <Stat label="HEIGHT" value={this.getFullHeight()} />
            <Stat label="WEIGHT" value={this.getFullWeight()} />
          </div>
        </div>
      </div>
    );
  }
}

const kobe = new Player(
  "Kobe Bryant",
  "Los Angeles Lakers",
  "1996 - 2016",
  "Shooting Guard",
  25.0,
  5.2,
  4.7,
  6.5, // height in feet
  212, // weight in pounds
  require("./KobeImg.jpg")
);

export default function NBACard() {
  return kobe.renderCard();
}