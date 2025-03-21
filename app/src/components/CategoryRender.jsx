import { useEffect } from "react";
import { getCategories } from "../utils/adapters";
import { getCategory } from "../utils/adapters";

const CategoryRender = ({
  categoriesArr,
  setCategoriesArr,
  category,
  setCategory,
  setFoods,
  foods,
}) => {
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        const categories = data[0].categories.map((cat) => [
          cat.idCategory,
          cat.strCategory,
        ]);
        setCategoriesArr(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCopyCategory = (category) => {
    console.log("handleCopyCategory: ", category);
    // navigator.clipboard
    //   .writeText(category)
    //   .then(() => alert(`Copied Category: ${category}`))
    //   .catch((err) => console.error("Error copying category:", err));
    setCategory(category);
  };

  const handleSubmit = async (selectedCategory) => {
    console.log("Selected category:", selectedCategory);
    setCategory(selectedCategory); // Update selected category

    try {
      const data = await getCategory(selectedCategory);
      const foodsFromCategory = data[0].meals || [];

      console.log("Fetched food data:", foodsFromCategory);
      setFoods(foodsFromCategory); // Store fetched data in state
    } catch (error) {
      console.error("Error fetching food data:", error);
    }
  };

  return (
    <div className="categories">
      <h3>Categories</h3>
      <div className="categoryGrid">
        {categoriesArr.map((cat) => (
          <p
            key={cat[0]}
            className="categoryItem"
            // onClick={() => handleCopyCategory(cat[1])} // Click to copy
            onClick={() => handleSubmit(cat[1])}
          >
            {cat[1]}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CategoryRender;
