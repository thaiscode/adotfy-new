import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
    <h2>A Adotfy faz a ponte <br/> entre você e a ONG mais próxima</h2>
    <div className="about__item flex">
        <div className="about__box">
            <img src="../assets/images/ONGs_icon.png" alt="" />
            <h3>ONGs</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="about__box">
            <img src="../assets/images/logo_icon_blue.png" alt="" />
            <h3>Adotfy</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="about__box">
            <img src="../assets/images/interessados_adoção_icon.png" alt="" />
            <h3>Interessados em adoção</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>    
    </section>
  );
};

export default About;