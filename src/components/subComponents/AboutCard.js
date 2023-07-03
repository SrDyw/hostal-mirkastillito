import React from "react";

export default function AboutCard({ image, desc, direction = "to-right" }) {
  return (
    <div className="about_card">
      <h2>asdasd</h2>
      {direction == "to-right" ? (
        <div className="about_card_content">
          <div className="about_card_image">
            <img src={image} alt="" />
          </div>
          <p className="flex-center gradient-text">{desc}</p>
        </div>
      ) : (
        <div className="about_card_content">
          <p className="flex-center gradient-text">{desc}</p>
          <div className="about_card_image">
            <img src={image} alt={desc} />
          </div>
        </div>
      )}
    </div>
  );
}
