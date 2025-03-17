import { useState } from "react";
import "./App.css";
import HomePage from "./Pages/Home";
import Recipes from "./Pages/Recipes";
import Account from "./Pages/Account";
import Login from "./Pages/Login";
import NFP from "./Pages/NotFoundPage";
import NavBar from "./components/NavBar";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/Account">Account</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Recipes" element={<Recipes />}></Route>
        <Route path="/Account" element={<Account />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="*" element={<NFP />}></Route>
      </Routes>
    </>
  );
}

export default App;
