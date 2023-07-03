import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

export default function PlaceCard({ image, desc }) {
  return (
    <motion.div
      className="place_card"
      whileInView={"show"}
      initial="hidden"
      viewport={{ once: false, amount: 0 }}
      variants={fadeIn("up")}
    >
      <div className="place_card_image">
        <img src={image} alt="" />
      </div>
      <div className="place_card_desc content">
        <h3>{desc.title}</h3>
        <p>{desc.info}</p>
      </div>
    </motion.div>
  );
}
