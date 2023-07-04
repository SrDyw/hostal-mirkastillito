import React from "react";
import "./navigator.css";
import { FaBars } from "react-icons/fa";
export default function Navigator() {
  const toggleHandler = () => {
    const nav = document.getElementById("nav");
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
    } else {
      nav.classList.add("active");
    }
  };

  return (
    <nav className="" id="nav">
      <div className="toggle flex-center" onClick={() => toggleHandler()}>
        <FaBars />
      </div>
      <ul className="link_list">
        <li>
          <a href=""></a>
        </li>
      </ul>
    </nav>
  );
}
