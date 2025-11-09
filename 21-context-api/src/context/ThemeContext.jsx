import { useState } from "react";
import { createContext } from "react";

export const ThemeDataContext = createContext();

const ThemeContext = (props) => {

  const [theme, setTheme] = useState('light')
  return (
    <div>
      <ThemeDataContext value={[theme,setTheme]}>
        {props.children}
      </ThemeDataContext>
    </div>
  );
};

export default ThemeContext;