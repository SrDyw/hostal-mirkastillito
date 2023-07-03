import React, { useContext, createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [len, setLen] = useState('en');
    const [theme, setTheme] = useState('dark');

    return <AppContext.Provider value={{len, setLen, theme, setTheme}}>{children}</AppContext.Provider>;
}
