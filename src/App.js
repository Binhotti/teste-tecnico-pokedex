import './App.css';
import React from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContextProvider } from "./context/ThemeContext";
import GlobalStyles from "./styles/GlobalStyles";
import AppRoutes from "./routes/AppRoutes";

function App() {
    return (
        <ThemeContextProvider>
            <ThemeProvider theme={{}}>
                <GlobalStyles />
                <AppRoutes />
            </ThemeProvider>
        </ThemeContextProvider>
    );
}

export default App;
