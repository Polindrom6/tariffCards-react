import React, { useState } from "react";
import "../styles/TariffCard.css";

const TariffCard = ({
  name,
  price,
  speed,
  highlighted,
  description,
  color,
}) => {
  const [flipped, setFlipped] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  return (
    <>
      <div
        className={`tariff-card ${flipped ? "flipped" : ""}`}
        onClick={handleCardClick}
      >
        <div className="tariff-card-inner">
          {/* Front Side */}
          <div
            className={`tariff-card-front ${highlighted ? "highlighted" : ""}`}
            style={{ backgroundColor: color }}
          >
            <h2 className="tariff-name">{name}</h2>
            <div className="tariff-price">
              <span className="rub">руб</span>
              {price}
              <span className="month"> /мес</span>
            </div>
            <p className="tariff-speed">{speed}</p>
            <div className="tariff-traffic">
              Объем включенного трафика не ограничен
            </div>
          </div>

          {/* Back Side */}
          <div className="tariff-card-back">
            <p className="tariff-description">{description}</p>
            <button
              className="details-btn"
              onClick={(e) => {
                e.stopPropagation(); // не переворачивать карточку при клике на кнопку
                setShowModal(true);
              }}
            >
              Подробнее
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>
              <strong>Скорость:</strong> {speed}
            </p>
            <p>
              <strong>Цена:</strong> {price} руб /мес
            </p>
            <button onClick={() => setShowModal(false)}>Закрыть</button>
          </div>
        </div>
      )}
    </>
  );
};

export default TariffCard;
