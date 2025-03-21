import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import FoodRender from "../components/FoodRender";
import FoodCard from "../components/FoodCard";
import { useState } from "react";
import CategoryRender from "../components/CategoryRender";

const Recipes = () => {
  const [foods, setFoods] = useState([]);
  const [categoriesArr, setCategoriesArr] = useState([]);
  const [category, setCategory] = useState(""); // Controlled input value

  return (
    <>
      <NavBar />
      <h1 className="pageTitle">Recipes Page</h1>
      <FoodRender
        foods={foods}
        setFoods={setFoods}
        categoriesArr={categoriesArr}
        setCategoriesArr={setCategoriesArr}
        category={category}
        setCategory={setCategory}
      />
      <Footer />
    </>
  );
};

export default Recipes;
