import { getCategory } from "../utils/adapters";
import { useState } from "react";
import FoodCard from "./FoodCard";
import CategoryRender from "./CategoryRender";

const FoodRender = ({
  foods,
  setFoods,
  categoriesArr,
  setCategoriesArr,
  category,
  setCategory,
}) => {
  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Selected category:", category);

    try {
      // Fetch food data for the selected category
      const data = await getCategory(category); // Should be the source of my problem
      const foodsFromCategory = data[0].meals;

      console.log("Fetched food data:", foodsFromCategory);
      setFoods(foodsFromCategory); // Store the fetched data in state
      console.log("foods: ", foods);
    } catch (error) {
      console.error("Error fetching food data:", error);
    }
  };

  // error when info isn't valid
  return (
    <>
      <div>
        <CategoryRender
          categoriesArr={categoriesArr}
          setCategoriesArr={setCategoriesArr}
          category={category}
          setCategory={setCategory}
          setFoods={setFoods}
          foods={foods}
        />
        <FoodCard foods={foods} />
      </div>
    </>
  );
};

export default FoodRender;
