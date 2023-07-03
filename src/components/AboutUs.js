import React from "react";
import AboutCard from "./subComponents/AboutCard";
import Logo from "./subComponents/Logo";
import "./about.css";


// import hoursLight from '../assets/24hoursLight.png';
import hours from '../assets/24hours.png';
import customer from '../assets/customer.png';
import calendar from '../assets/calendar.png';
import Logo2 from "./subComponents/Logo2";

export default function AboutUs() {
  return (
    <section id="about_us">
      <h2 className="section-title flex-center">Acerca de Nostoros</h2>
      <div className="header__logo flex-center">
        <Logo2 className="logo"></Logo2>
      </div>
      <h2 className="about_us_subheader">Hostal Mirkastillito</h2>
      <div className="about_card_container content">
        <AboutCard image={calendar} desc={'+10 años de serivicio'}/>
        <AboutCard image={customer} desc={'+1000 clientes satisfechos'} direction="to-left"/>
        <AboutCard image={hours} desc={'Servicio las 24 horas de día'}/>
      </div>
    </section>
  );
}
