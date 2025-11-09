import { useContext } from "react";
import Nav2 from "./Nav2";
import { ThemeDataContext } from "../context/ThemeContext";

const Navbar = () => {

    const [theme] = useContext(ThemeDataContext)
  return (
    <div className={theme}>
      <h1>David Samuel</h1>
      <Nav2 />
    </div>
  );
};

export default Navbar;