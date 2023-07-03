import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import RM1 from "../../assets/room_1.jpg";
import RM2 from "../../assets/room_1.jpg";

export default function ImageCard({ image, desc, delay = 0 }) {
  let [index, setIndex] = useState(0);
  let loaded = false;
  let intervalFunction = null;

  useEffect(() => {
    const app = document.getElementById("app_content");

    if (!loaded) {
      if (intervalFunction == null)
        intervalFunction = setInterval(() => {
          // console.log(i);
          setIndex(index);

          app.style.setProperty("--i", index++);

          if (index == image.length) {
            index = 0;
          }
          if (index > image.length) setIndex(0);
        }, 3000);
      // clearInterval(intervalFunction);
      loaded = true;
    }
  }, []);

  return (
    <div className="image_card">
      <div className="images_container">
        {image.map((element, key) => (
          <img src={element} key={key} alt="" />
        ))}
      </div>
      <div className="images__index flex-center">
        {image.map(
          (element, key) => (
            <span key={key} className={key == index ? "active" : ""}></span>
          )
          // console.log(`key ${key} curr ${index}`)
        )}
      </div>
    </div>
  );
}
