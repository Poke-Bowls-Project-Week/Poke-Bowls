import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import HomePage from "./Pages/Home.jsx";
import NFP from "./Pages/NotFoundPage.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </StrictMode>
);
