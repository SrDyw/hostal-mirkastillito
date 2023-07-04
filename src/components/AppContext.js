import React, { useContext, createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [len, setLen] = useState('en');
    const [theme, setTheme] = useState('dark');
    const [images_index, setImagesIndex] = useState([0,0,0]);

    return <AppContext.Provider value={{len, setLen, theme, setTheme, images_index, setImagesIndex}}>{children}</AppContext.Provider>;
}
