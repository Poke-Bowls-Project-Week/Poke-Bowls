const setLocalStorageKey = (key, value) => {
  // the key will be savedRecipes
  localStorage.setItemI(key, JSON.stringify(value));
};

const getLocalStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    console.error(err);
    return null;
  }
};

// Example Usages: Get Items return item (item = getLocalStorageKey('itemsKey i.e. pallets'))

// when users save a recipe it'll save to their "account"

const setSavedRecipes = (recipes) => {
  console.log("setSavedRecipes: ", recipes);
  setLocalStorageKey("savedRecipes", recipes);
};

const getSavedRecipes = () => {
  const savedRecipes = getLocalStorageKey("savedRecipes");
  console.log("getSavedRecipes: ", savedRecipes);
  return savedRecipes || {};
};

const saveRecipe = (toBeSaved) => {
  const savedRecipes = getSavedRecipes();
  savedRecipes[toBeSaved.id] = toBeSaved;
  setSavedRecipes(savedRecipes);

  console.log(savedRecipes);
};

const removeRecipe = (toBeRemoved) => {
  const savedRecipes = getSavedRecipes();
  delete savedRecipes[toBeRemoved.id];
};

// Account LocalStorage
