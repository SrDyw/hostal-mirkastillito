import React, { useContext } from "react";
import "./galery.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import ImageCard from "./subComponents/ImageCard";

import RM1 from "../assets/room_1.jpg";
import RM2 from "../assets/room_2.jpg";
import RM3 from "../assets/room_3.jpg";

import BT1 from "../assets/bath_1.jpg";
import BT2 from "../assets/bath_2.jpg";
import BT3 from "../assets/bath_3.jpg";

import OT1 from "../assets/out_1.jpg";
import OT2 from "../assets/out_2.jpg";
import OT3 from "../assets/out_3.jpg";
import GaleryCard from "./subComponents/GaleryCard";
import { getText } from "../libs/pageText";
import { AppContext } from "./AppContext";

export default function Galery() {
  const {len} = useContext(AppContext);
  return (
    <section id="galery" className="content">
      <h2 className="section-title flex-center">{len == 'es' ? "Habitación" : "Room"}</h2>
      <p className="sub-header">
        {
          getText("GSubHeader", len)
        }
      </p>
      <div className="galery__photos">
        <GaleryCard
          images={[RM1, RM2, RM3]}
          delay={0.2}
          card_info={{
            title: len == 'es' ? "Habitación" : "Room",
            items: [len == 'es' ? "Aire Acondicionado" : "Air conditioning", len == 'es' ? "Concina Privada" : "Private Cook"],
          }}
        />
        <GaleryCard
          images={[BT1, BT2, BT3]}
          delay={0.3}
          card_info={{ title: len == 'es' ? "Baño" : "Bathroom", items: [len == 'es' ? "Agua Frio-Caliente" : "Cold-Hot Water"] }}
        />
        <GaleryCard
          images={[OT1, OT2, OT3]}
          delay={0.4}
          card_info={{ title: len == 'es' ? "Terraza" : "Terrace", items: [len == 'es'  ?"Columpio" : "Swing", len == 'es' ? "Vista" : "Good Views"] }}
        />
      </div>
    </section>
  );
}
