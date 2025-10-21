import React from "react";
import { createRoot } from "react-dom/client";
import NavBar from "./NavBar.jsx";
import About from "./About.jsx";
import ONG from "./ONG.jsx";
import Footer from "./footer.jsx";

const NavBarContainer = document.getElementById("nav-root");
createRoot(NavBarContainer).render(<NavBar/>);

const AboutContainer = document.getElementById("about-root");
createRoot(AboutContainer).render(<About/>);

const ONGContainer = document.getElementById("ong-root");
createRoot(ONGContainer).render(<ONG/>);

const FooterContainer = document.getElementById("footer-root");
createRoot(FooterContainer).render(<Footer/>);

