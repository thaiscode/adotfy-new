import React from "react";
import "./ONG.css";

const ONG = () => {
  return (
    <section className="ong">
        <div className="ong__text">
            <h2>Nossas ONGs parceiras</h2>
            <p>Atualmente contamos com 3 ONGs associadas. <br/> Quer fazer parte do nosso time?</p>
            <button className="button">Cadastrar ONG</button>
        </div>
        <div className="ong__img flex">
            <div className="ong__img__box">
                <img src="../assets/images/ong1.png" alt="" />
                <p>ONG</p>
            </div>
            <div className="ong__img__box">
                <img src="../assets/images/ong2.png" alt="" />
                <p>ONG</p>
            </div>
            <div className="ong__img__box">
                <img src="../assets/images/ong3.png" alt="" />
                <p>ONG</p>
            </div>
        </div>
    </section>
  );
};

export default ONG;