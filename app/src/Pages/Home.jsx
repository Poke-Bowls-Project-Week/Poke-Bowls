import NavBar from "../components/NavBar";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

// Todo: Test

const HomePage = () => {
  // use the useContext hook to get the state and function you want to provide
  return (
    <>
      {/* <h1>Home Testing</h1> */}
      <NavBar />
      <Welcome />
      <Footer />
    </>
  );
};

export default HomePage;
