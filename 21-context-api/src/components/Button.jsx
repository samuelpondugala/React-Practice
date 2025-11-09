import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Button = () => {
    const [theme, setTheme] = useContext(ThemeDataContext)
    const changeTheme = ()=>{
        console.log("theme changed successfully")
        setTheme('dark')
    }
  return (
    <div>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
};

export default Button;