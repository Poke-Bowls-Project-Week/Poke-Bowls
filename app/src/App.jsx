// import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext.jsx";
import HomePage from "./Pages/Home.jsx";
import Recipes from "./Pages/Recipes";
import Account from "./Pages/Account";
import Login from "./Pages/Login";
import NFP from "./Pages/NFP.jsx";
import Register from "./Pages/Register.jsx";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/recipes", element: <Recipes /> },
  { path: "/account", element: <Account /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <NFP /> }, // Catch-all route for 404
]);

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const mainClass = theme ? "light-mode" : "dark-mode";

  return (
    <>
      {/* <main className={mainClass}>
        <button onClick={toggleTheme}>{mainClass}</button> */}
      <RouterProvider router={router} />
      {/* </main> */}
    </>
  );
}

export default App;
