import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar flex">
      <div className="logo flex">
        <p><a href="#home">Adotfy</a></p>
        <img src="../assets/images/logo_icon.png" alt=""/>
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={`nav-links flex ${menuOpen ? "active" : ""}`}>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#pets">Pets</a></li>
        <li><a href="#ongs">ONGs</a></li>
        <li><a href="#animais_perdidos">Animais perdidos</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;