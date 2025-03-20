import { getCategory } from "../utils/adapters";
import { useState } from "react";
import FoodCard from "./FoodCard";
import CategoryRender from "./CategoryRender";

const FoodRender = ({ foods, setFoods }) => {
  const [category, setCategory] = useState(""); // Controlled input value
  // Stores fetched food data

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

  // Handle input change
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  // error when info isn't valid
  return (
    <>
      <div className="searchForm">
        <form onSubmit={handleSubmit}>
          <label htmlFor="form-search">Category of Food: </label>
          <input
            type="text"
            id="form-search"
            className="form-search"
            value={category}
            onChange={handleChange}
          />
          <button type="submit" className="search-btn">
            Get Recipes
          </button>
        </form>
      </div>
      <div>
        <CategoryRender />
        <FoodCard foods={foods} />
      </div>
    </>
  );
};

export default FoodRender;
