import React from "react";
import "../data/tariffs.json";
import "../styles/TariffCard.css";

const TariffCard = ({ name, price, speed, highlighted }) => {
  return (
    <div className={`tariff-card ${highlighted ? "highlighted" : ""}`}>
      <h2 className="tariff-name">{name}</h2>
      <div className="tariff-price">
        <span className="rub">руб</span>
        {price}
        <span className="month">/мес</span>
      </div>
      <p className="tariff-speed">{speed}</p>
      <div className="tariff-traffic">
        Объем включенного трафика не ограничен
      </div>
    </div>
  );
};

export default TariffCard;
