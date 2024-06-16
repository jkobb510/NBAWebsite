import React from "react";
import "./NBACard.css";
import CardStats from "../../Molecules/CardStats";
import CardInfo from "../../Molecules/CardInfo";
class Player {
  constructor(name, team, years, position, imgSrc) {
    this.name = name;
    this.team = team;
    this.years = years;
    this.position = position;
    this.imgSrc = imgSrc;
  }

  renderCard() {
    return (
      <div className="nba-card">
        <img loading="lazy" src={this.imgSrc} alt={this.name} />
        <div className="card-content">
          <CardInfo />
          <CardStats />
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