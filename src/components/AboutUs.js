import React, { useContext } from "react";
import AboutCard from "./subComponents/AboutCard";
import Logo from "./subComponents/Logo";
import "./about.css";


// import hoursLight from '../assets/24hoursLight.png';
import hours from '../assets/24hours.png';
import customer from '../assets/customer.png';
import calendar from '../assets/calendar.png';
import Logo2 from "./subComponents/Logo2";
import { AppContext } from "./AppContext";
import Logo3 from "./subComponents/Logo3";

export default function AboutUs() {
  const {len} = useContext(AppContext);
  return (
    <section id="about_us">
      <h2 className="section-title flex-center">{len == 'es' ? "Acerca de nosotros" : "About us"}</h2>
      <div className="header__logo flex-center">
        <Logo3 color='#3b96ff' className="logo_about_us"></Logo3>
      </div>
      <h2 className="about_us_subheader">Hostal Mirkastillito</h2>
      <div className="about_card_container content">
        <AboutCard image={calendar} desc={len == 'es' ? '+10 años de servicio' : '+10 year of service'}/>
        <AboutCard image={customer} desc={len == 'es' ? '+1000 clientes satisfechos' : '+1000 satisfied customers'} direction="to-left"/>
        <AboutCard image={hours} desc={len == 'es' ? 'Servicio las 24 horas de día' : '24-hour service'}/>
      </div>
    </section>
  );
}
