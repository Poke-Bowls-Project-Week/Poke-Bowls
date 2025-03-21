import { useState } from "react";
import { getSingleFoodId } from "../utils/adapters";
import Modal from "./Modal";

const DetailsButton = ({ idMeal }) => {
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const userClick = async () => {
    console.log("Opening Modal...");
    try {
      const response = await getSingleFoodId(idMeal);
      console.log("response: ", response[0].meals[0]);

      if (response[0].meals[0]) {
        setData(response[0].meals[0]); // Store food details in state
        setIsOpen(true); // Open modal
      } else {
        console.error("Invalid API response:", response);
      }
    } catch (error) {
      console.error("Error fetching food details:", error);
    }
  };

  return (
    <>
      <button onClick={userClick}>Show Me The Recipe!</button>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} data={data} />
      )}
    </>
  );
};

export default DetailsButton;
