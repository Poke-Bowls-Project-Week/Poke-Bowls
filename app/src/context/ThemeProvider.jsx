// File: src/context/ThemeProvider.jsx
// import the context you just created
import { useState } from "react";
import ThemeContext from "./ThemeContext";

// create the Provider function
const ThemeProvider = ({ children }) => {
  //This state is the context we want to provide to other components
  const [theme, setTheme] = useState(false);

  //This function is context we want to provide to other components
  const toggleTheme = () => {
    setTheme((prev) => !prev);
  };

  //return the Context.Provider with the context you want to provide
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
// NOTE: the children represent all of the child elements of App component

// export the Provider
export default ThemeProvider;
