import { getSingleFoodId } from "../utils/adapters";
import { useEffect } from "react";

const DetailsButton = ({ idMeal }) => {
  let data;

  const userCLick = async () => {
    console.log("Opening Modal");
    console.log(data);
    // This is where the show modal logic goes making sure the
  };

  useEffect(() => {
    const handleClick = async () => {
      data = await getSingleFoodId(idMeal);
      data = data[0].meals;
      console.log("from Details button: ", data);
    };

    handleClick();
  }, [userCLick]);

  return <button onClick={userCLick}>Show Me The Recipe!</button>;
};

export default DetailsButton;
