// import { useDebugValue, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/recipes"}>Recipes</Link>
      </li>
      {/* <li>
        <Link to={"/account"}>Account</Link>
      </li>
      <li>
        <Link to={"/login"}>Login</Link>
      </li> */}
    </nav>
  );
};

export default NavBar;
