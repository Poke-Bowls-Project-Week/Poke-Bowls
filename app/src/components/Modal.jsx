import { useState, useEffect } from "react";
import { getSingleFoodId } from "../utils/adapters";

const ModalInfo = ({ data }) => {
  console.log("data passed to modal: ", data);

  const ingredientArr = [];
  const measureArr = [];

  let i = 0;

  while (i <= 20) {
    if (data[`strIngredient${i}`]) {
      ingredientArr.push(data[`strIngredient${i}`]);
      measureArr.push(data[`strMeasure${i}`]);
    }

    i++;
  }

  const speak = (text) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser does not support speech synthesis.");
    }
  };

  console.log("testing testing: ", ingredientArr);
  console.log("testing testing: ", measureArr);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="modalInfo">
      <img src={data.strMealThumb} alt={data.strMeal} />
      <h5 onClick={() => speak(data.strMeal)}>{data.strMeal}</h5>

      <ul>
        {ingredientArr &&
          ingredientArr.map((ingredient, index) => (
            <li key={index}>
              {ingredient}: {measureArr[index]}
            </li>
          ))}
      </ul>
      <p>{data.strInstructions}</p>
      {data.strYoutube && (
        <iframe
          width="320"
          height="240"
          src={data.strYoutube.replace("watch?v=", "embed/")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

const Modal = ({ isOpen, onClose, idMeal, data }) => {
  if (!isOpen) return null; // Don't render if modal is closed

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <ModalInfo data={data} />
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
