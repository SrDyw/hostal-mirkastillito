import React from "react";
import Header from "./components/Header";
import Galery from "./components/Galery";
import { useEffect, useContext } from "react";
import { AppContext } from "./components/AppContext";
import Ubication from "./components/Ubication";
import AboutUs from "./components/AboutUs";
import { FaWhatsapp } from "react-icons/fa";

const App = () => {
  const { theme, setTheme, len, setLen } = useContext(AppContext);
  useEffect(() => {
    ChangeLen(navigator.language);

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
      ChangeColor('dark');
    } else {
      setTheme("light");
      ChangeColor('light');
    }
  }, []);

  const ChangeColor = (color) => {
    const app = document.getElementById("app_content");
    app.style.setProperty("--theme", color === "light" ? "#fff" : "#000");
    app.style.setProperty("--theme-font", color === "light" ? "#000" : "#fff");
    app.style.setProperty("--theme-font-header", color === "light" ? "#003c8a" : "#71aeff");
    app.style.setProperty("--theme-degrad1", color === "light" ? "#003c8a" : "#10003b");
    app.style.setProperty("--theme-degrad2", color === "light" ? "#3bc8ff" : "#000");

    document.documentElement.style.backgroundColor = color === "light" ? "#fff" : "#000";
  };

  const ChangeLen = len => {
    setLen(len);
    document.documentElement.lang = len;

    console.log("Lenguage changed to", len);
  } 

  const openWhatsap = () => {
    window.open("https://wa.me/52497742");
  }

  return (
    <div id="app_content">
      <Header />
      <Galery />
      <Ubication/>
      <AboutUs/>
      <div className="w_button flex-center" onClick={() => openWhatsap()}>
        <FaWhatsapp className="w_button_logo"/>
      </div>
    </div>
  );
};

export default App;
