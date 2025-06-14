import React from "react";
import "./App.css";
import TariffCard from "./components/TariffCard";
import tariffData from "./data/tariffs.json";

function App() {
  return (
    <div className="tariff-container">
      {tariffData.map((tariff, index) => (
        <TariffCard key={index} {...tariff} />
      ))}
    </div>
  );
}

export default App;
