import React from "react";
import { createRoot } from "react-dom/client";
import NavBar from "./NavBar.jsx";
import Footer from "./footer.jsx";

const NavBarContainer = document.getElementById("nav-root");
createRoot(NavBarContainer).render(<NavBar />);

const FooterContainer = document.getElementById("footer-root");
createRoot(FooterContainer).render(<Footer />);

