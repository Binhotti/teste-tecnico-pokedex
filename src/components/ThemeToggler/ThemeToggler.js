import React from "react";
import { useTheme } from "../../context/ThemeContext";

function ThemeToggler() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="btn-theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? "🌙" : "🌞"}
    </button>
  );
}

export default ThemeToggler;