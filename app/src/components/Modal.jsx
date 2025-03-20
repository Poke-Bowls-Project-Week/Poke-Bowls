import { useState, useEffect } from "react";
import { getSingleFoodId } from "../utils/adapters";

const ModalInfo = ({ idMeal }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!idMeal) return; // Prevents API call with an undefined idMeal
      try {
        const response = await getSingleFoodId(idMeal);
        setData(response.meals[0]); // Store first meal object
      } catch (error) {
        console.error("Error fetching food details:", error);
      }
    };
    fetchData();
  }, [idMeal]);

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
          src={data.strYoutube.replace("watch?v=", "embed/")} // Converts URL to embeddable format
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

const Modal = ({ isOpen, onClose, idMeal }) => {
  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <ModalInfo idMeal={idMeal} />
      </div>
    </div>
  );
};

export default Modal;
