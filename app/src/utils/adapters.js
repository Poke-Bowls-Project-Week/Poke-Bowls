import { handleFetch } from "./handleFetch.js";

export const getCategories = async () => {
  const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
  return await handleFetch(url);
};

export const getCategory = async (category) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  return await handleFetch(url);
};

export const getSingleFoodId = async (id) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  return await handleFetch(url);
};

// let d = await getCategory("Beef");
// console.log(d[0]);

// let data = await getSingleFoodId(52772);
// console.log(data[0]);
