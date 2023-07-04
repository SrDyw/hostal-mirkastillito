import React from "react";
import Header from "./components/Header";
import Galery from "./components/Galery";
import { useEffect, useContext } from "react";
import { AppContext } from "./components/AppContext";
import Ubication from "./components/Ubication";
import AboutUs from "./components/AboutUs";
import { FaWhatsapp } from "react-icons/fa";
import EndSection from "./components/EndSection";
import Navigator from "./components/Navigator";

const App = () => {
  const { theme, setTheme, len, setLen } = useContext(AppContext);

  let loaded = false;

  useEffect(() => {
    // console.log(contact_us);
    ChangeLen(navigator.language);

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
      ChangeColor("dark");
    } else {
      setTheme("light");
      ChangeColor("light");
    }

    if (!loaded) {
      loaded = true;
      // const contact_us = document.querySelector(".contact_us");
      // setTimeout(() => {
      //   contact_us.classList.add("hidden");
      // }, 2800);
    }
  }, []);

  const ChangeColor = (color) => {
    const app = document.getElementById("app_content");
    app.style.setProperty("--theme", color === "light" ? "#fff" : "#000");
    app.style.setProperty("--theme-font", color === "light" ? "#000" : "#fff");
    app.style.setProperty(
      "--theme-font-header",
      color === "light" ? "#003c8a" : "#71aeff"
    );
    app.style.setProperty(
      "--theme-degrad1",
      color === "light" ? "#003c8a" : "#10003b"
    );
    app.style.setProperty(
      "--theme-degrad2",
      color === "light" ? "#3bc8ff" : "#000"
    );

    document.documentElement.style.backgroundColor =
      color === "light" ? "#fff" : "#000";
  };

  const ChangeLen = (len) => {
    const lengToChange = len.split('-')[0].toLowerCase();
    setLen(lengToChange);
    document.documentElement.lang = lengToChange;

    console.log("Lenguage changed to", lengToChange);
  };

  const openWhatsap = () => {
    window.open("https://wa.me/52497742");
  };

  return (
    <div id="app_content">
      {/* <Navigator/> */}
      <Header />
      <Galery />
      <Ubication />
      <AboutUs />
      <EndSection />
      <div className="w_button flex-center" onClick={() => openWhatsap()}>
        <FaWhatsapp className="w_button_logo" />
        {/* <div className="contact_us">
          <p>Contáctanos</p>
        </div> */}
      </div>
      <div className="leng flex-center" onClick={() => ChangeLen(len == 'es' ? 'en' : 'es')}>
        {len}
      </div>
    </div>
  );
};

export default App;
