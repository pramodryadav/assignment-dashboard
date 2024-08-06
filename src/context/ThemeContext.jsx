import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [mode, setMode] = useState("dark");
    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
            {
                children
            }
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeContextProvider }