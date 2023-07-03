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

export default function Ubication() {
  const { theme } = useContext(AppContext);

  return (
    <section id="ubication" className="content">
      <h2 className="section-title flex-center">Ubicación</h2>
      <p className="sub-header">
        El Hostal Mirkastillito se encuentra ubicado en el corazón de la capital
        de Cuba, La Habana, de forma que usted podrá visitar sitios de gran
        interés turístico de forma rápida y sencilla
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
          Sitios cernanos de interés
        </motion.h2>
        <PlaceCard
          image={oldPlace}
          desc={{
            title: "Plaza Vieja",
            info: "De las más antiguas de La Habana Vieja rodeada de hermosas edificaciones de estilo colonial",
          }}
        />
        <PlaceCard
          image={catedral}
          desc={{
            title: "Catedral",
            info: "Es una de las más impresionantes de toda Cuba y cuenta con una arquitectura barroca espectacular.",
          }}
        />
        <PlaceCard
          image={malecon}
          desc={{
            title: "Malecón",
            info: "Ideal para caminar, tomar fotografías y disfrutar de una vista impresionante del mar.",
          }}
        />
        <PlaceCard
          image={capitolio}
          desc={{
            title: "Capitolio",
            info: "Edificio emblámatico de La Habana considerado uno de los más importantes de Cuba",
          }}
        />
      </motion.div>
    </section>
  );
}
