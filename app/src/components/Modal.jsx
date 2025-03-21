import { useState, useEffect } from "react";
import { getSingleFoodId } from "../utils/adapters";

const ModalInfo = ({ data }) => {
  console.log("data passed to modal: ", data);
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (!idMeal) return; // Prevent API call with an undefined idMeal
  //     try {
  //       const response = await getSingleFoodId(idMeal);
  //       if (response[0].meals) {
  //         setData(response[0].meals); // Store first meal object
  //         console.log("Data For modal: ", data);
  //       } else {
  //         console.error("Invalid response format:", response);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching food details:", error);
  //     }
  //   };

  //   fetchData();
  // }, [idMeal]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="modalInfo">
      <img src={data.strMealThumb} alt={data.strMeal} />
      <h5>{data.strMeal}</h5>
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
