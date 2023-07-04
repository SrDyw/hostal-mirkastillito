import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import RM1 from "../../assets/room_1.jpg";
import RM2 from "../../assets/room_1.jpg";
import { AppContext } from "../AppContext";

export default function ImageCard({ image, desc, card_index, delay = 0 }) {
  const { images_index, setImagesIndex } = useContext(AppContext);
  let loaded = false;
  let intervalFunction = null;
  let index = 0;

  useEffect(() => {

    if (!loaded) {
      if (intervalFunction == null)
        intervalFunction = setInterval(() => {
          update_image_index();
          // // console.log(i);
          // setImagesIndex(images_index);
          // app.style.setProperty("--i", images_index);
          // if (images_index == image.length - 1) {
          //   setImagesIndex(0);
          // }
          // if (images_index > image.length) setImagesIndex(0);
        }, 3000);
      // clearInterval(intervalFunction);
      loaded = true;
    }
  }, []);

  const update_image_index = () => {
    const images_index_element = document.querySelector(
      `.images_index_${card_index}`
    );
    const spans = images_index_element.children;

    for (let i = 0; i < spans.length; i++) {
      if (spans.item(i).classList.contains("active"))
        spans.item(i).classList.remove("active");
    }

    spans.item(index).classList.add("active");

    // const app = document.getElementById("app_content");
    // app.style.setProperty("--i", index);

    const images_container = document.getElementById(`images_container_${card_index}`);
    images_container.style.marginLeft = `calc(-100% * ${index})`;

    index++;
    if (index == spans.length) {
      index = 0;
    }
  };

  return (
    <div className="image_card">
      <div className={`images_container`} id={`images_container_${card_index}`}>
        {image.map((element, key) => (
          <img src={element} key={key} alt={desc} />
        ))}
      </div>
      <div className={`images__index flex-center images_index_${card_index}`}>
        {image.map(
          (element, key) => (
            <span
              key={key}
              className={key == images_index ? "active" : ""}
            ></span>
          )
          // console.log(`key ${key} curr ${index}`)
        )}
      </div>
    </div>
  );
}
