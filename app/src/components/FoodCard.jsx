import DetailsButton from "./DetailsButton";
import { useState } from "react";
import Modal from "./Modal";

const FoodCard = ({ foods }) => {
  let [isOpen, onClose] = useState(false);

  console.log("foodCard: ", foods);

  return (
    <div className="cardContainer">
      <h2>Foods</h2>
      <div className="foodCardContainer">
        {(foods || []).length > 0 ? (
          foods.map((item, index) => (
            <div className="foodCard" key={index}>
              <h3>{item.strMeal}</h3>
              <img src={item.strMealThumb} alt={item.strMeal} width={100} />
              {/* <Modal isOpen={isOpen} onClose={onClose}/> */}
              <DetailsButton idMeal={item.idMeal} />
            </div>
          ))
        ) : (
          <p>Submit a category</p>
        )}
      </div>
    </div>
  );
};

export default FoodCard;
