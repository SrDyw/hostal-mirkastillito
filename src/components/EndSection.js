import React, { useContext } from "react";
import './end.css'
import { getText } from "../libs/pageText";
import { AppContext } from "./AppContext";


export default function EndSection() {
    const {len} = useContext(AppContext);
  return (
    <section id="end" className="content flex-center">
      <div className="end_content">
        <h2 className="section-title flex-center">{len == 'es' ? '¡Reserve Ahora!' : 'Book now!'}</h2>
        <h3 className="gradient-text text-center">
          {
            getText("EndMessage", len)
          }
        </h3>
        <a className="custom-button" href="https://wa.me/52497742" target="_blank">{len == 'es' ? 'Reservar' : 'Book'}</a>
      </div>
    </section>
  );
}
