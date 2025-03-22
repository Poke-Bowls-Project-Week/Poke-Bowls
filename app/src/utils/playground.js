import { getCategories, getCategory } from "./adapters.js";

const test = () => {};

let data = await getCategories();
console.log(data[0].categories);

let data2 = await getCategory("beef");
console.log(data2[0]);
