import React, { createContext, useState, useContext } from "react";
import lightTheme from "../../styles/lightTheme"
import darkTheme from "../../styles/darkTheme"

const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }

    const themeStyles = theme === 
}