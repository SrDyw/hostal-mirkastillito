import React, { useContext } from "react";
import { FaHome, FaStarHalfAlt } from "react-icons/fa";
import "./header.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Logo from "./subComponents/Logo";
import { getText } from "../libs/pageText";
import { AppContext } from "./AppContext";
import Logo3 from "./subComponents/Logo3";
// import {ReactComponent as Logo} from '../assets/m_crown_fill.svg';

export default function Header() {
  const {len} = useContext(AppContext);
  return (
    <section className="header flex-center">
      <div className="header__logo flex-center">
        <Logo3 className="logo" ></Logo3>
      </div>
      <motion.div
        className="header__content"
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
      >
        <h1 className="header__title gradient-text">
            <span>Hostal</span>
            Mirkastillito
        </h1>
        <div className="header__items">
          <h2>
          {getText("Hero", len)}
          </h2>
          <div className="header__input flex-center">
            <a href="#galery" className="custom-button">
              {getText("SRoom", len)}
              <span>
                <FaHome />
              </span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
