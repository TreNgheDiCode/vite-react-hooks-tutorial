import { CSSProperties } from "react";
import { useTheme } from "../hooks/use-theme";

export const UseContextDemo = () => {
  const { theme, toggleTheme } = useTheme();

  const themeStyles: Record<string, CSSProperties> = {
    light: {
      backgroundColor: "#fff",
      color: "#000",
      padding: "1rem",
      margin: "0 auto",
    },
    dark: {
      backgroundColor: "#333",
      color: "#fff",
      padding: "1rem",
      margin: "0 auto",
    },
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles[theme]}>
        <h2>useContext Demo</h2>
        <p>
          useContext is a hook that allows you to consume context within a
          function component.
        </p>
        <p>
          In this example, we are consuming the theme context to toggle between
          light and dark themes.
        </p>
      </div>
    </>
  );
};
