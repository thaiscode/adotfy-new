import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav className="navbar flex">
      <div className="logo flex">
        <p><a href="index.html">Adotfy</a></p>
        <img src="/assets/images/logo_icon.png" alt=""/>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="sobre.html">Sobre</a></li>
        <li><a href="pets.html">Pets</a></li>
        <li><a href="ongs.html">ONGs</a></li>
        <li><a href="perdidos.html">Animais perdidos</a></li>
        <li><a href="login.html">Login</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;