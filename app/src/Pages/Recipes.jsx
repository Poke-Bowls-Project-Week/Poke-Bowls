import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import FoodRender from "../components/FoodRender";
import FoodCard from "../components/FoodCard";
import { useState } from "react";
import CategoryRender from "../components/CategoryRender";

const Recipes = () => {
  const [foods, setFoods] = useState([]);
  // I want to use this foods value to make a card for each Item in the foods array with the
  // relevant info

  return (
    <>
      <NavBar />
      <h1>Recipes Page</h1>
      <FoodRender foods={foods} setFoods={setFoods} />
      <Footer />
    </>
  );
};

export default Recipes;
