import React from "react";
import { createRoot } from "react-dom/client";
import '../style.css';

import NavBar from "./NavBar.jsx";
import About from "./About.jsx";
import Pets from "./Pets.jsx";
import ONG from "./ONG.jsx";
import Perdidos from "./Perdidos.jsx";
import Footer from "./footer.jsx";


function renderIfExists(id, component) {
  const el = document.getElementById(id);
  if (el) {
    createRoot(el).render(component);
  }
}

renderIfExists("nav-root", <NavBar/>);
renderIfExists("about-root", <About/>);
renderIfExists("pets-root", <Pets/>);
renderIfExists("ong-root", <ONG/>);
renderIfExists("perdidos-root", <Perdidos/>);
renderIfExists("footer-root", <Footer/>);

