import React, { useContext } from "react";
import "./ubication.css";
import cuba from "../assets/cuba_ubi.png";
import cuba_dark from "../assets/cuba_ubi_dark.png";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { AppContext } from "./AppContext";
import PlaceCard from "./subComponents/PlaceCard";

import oldPlace from "../assets/old_plaza.jpg";
import catedral from "../assets/catedral.jpg";
import malecon from "../assets/malecon.jpg";
import capitolio from "../assets/capitolio.jpg";
import bodeguita from "../assets/bodeguita.jpg";
import { getText } from "../libs/pageText";

export default function Ubication() {
  const { theme, len } = useContext(AppContext);

  return (
    <section id="ubication" className="content">
      <h2 className="section-title flex-center">{len == 'es'  ? "Ubicación" : "Ubication"}</h2>
      <p className="sub-header">
        {getText("Ubication", len)}
      </p>
      <motion.div
        className="ubication__image"
        whileInView={"show"}
        initial="hidden"
        viewport={{ once: false, amount: 0 }}
        variants={fadeIn("up")}
      >
        <img src={theme == "light" ? cuba_dark : cuba} alt="" />
      </motion.div>
      <motion.div className="ubitacion_places">
        <motion.h2
          whileInView={"show"}
          initial="hidden"
          viewport={{ once: false, amount: 0 }}
          variants={fadeIn("up")}
        >
          {len == 'es' ? "Sitios cercanos de interés" : "Nearby attractions"}
        </motion.h2>
        <PlaceCard
          image={oldPlace}
          desc={{
            title: "Plaza Vieja",
            info: getText("Plaza", len),
          }}
        />
        <PlaceCard
          image={catedral}
          desc={{
            title: "Catedral",
            info: getText("Catedral", len),
          }}
        />
        <PlaceCard
          image={malecon}
          desc={{
            title: "Malecón",
            info: getText("Malecon", len),
          }}
        />
        <PlaceCard
          image={capitolio}
          desc={{
            title: "Capitolio",
            info: getText("Capitolio", len),
          }}
        />
        <PlaceCard
          image={bodeguita}
          desc={{
            title: "Bodeguita del Medio",
            info: getText("Bodeguita", len),
          }}
        />
      </motion.div>
    </section>
  );
}
