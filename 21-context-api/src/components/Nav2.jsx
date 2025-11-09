import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Nav2 = () => {
    const [theme,setTheme] = useContext(ThemeDataContext)
    console.log(setTheme)
  return (
    <div className="">
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contact</h4>
      <h4>Login</h4>
      <h4>{theme}</h4>
    </div>
  );
};

export default Nav2;