import { getCategories, getCategory } from "../utils/adapters";
import { useState, useEffect } from "react";

const CategoryRender = () => {
  const [categoriesArr, setCategoriesArr] = useState([]); // List of categories

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

  return (
    <div className="categories">
      <h3>Categories</h3>
      <div className="categoryGrid">
        {categoriesArr.map((cat) => (
          <p key={cat[0]} className="categoryItem">
            {cat[1]}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CategoryRender;
