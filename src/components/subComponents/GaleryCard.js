import React from "react";
import ImageCard from "./ImageCard";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { FaStar } from "react-icons/fa";

export default function GaleryCard({ images, delay, card_info, card_index }) {
  console.log("key",card_index);
  return (
    <motion.div
      className="galery_card content"
      whileInView={"show"}
      variants={fadeIn("up", delay)}
      viewport={{ once: false, amount: 0 }}
      initial="hidden"
    >
      <ImageCard delay={delay} image={images} desc={card_info.title} card_index={card_index}/>
      <div className="galery_card_info content">
        <h2>{card_info.title}</h2>
        {card_info.items.map((item, key) => (
          <h3 key={key}><span><FaStar/></span>{item}</h3>
        ))}
      </div>
    </motion.div>
  );
}
