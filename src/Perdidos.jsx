import React from "react";
import "./Perdidos.css";

const Perdidos = () => {
  const perdidosCards = [];

  for (let i = 0; i < 8; i++) {
    perdidosCards.push(
      <div key={i} className="perdidos-card">
        <img src="/assets/images/pets_icon.png" alt="" />
        <div>
            <p>
                <span>Nome:</span> Miau Primeiro <br/>
                <span>Localização:</span> São Carlos - SP <br/>
                <span>Contato:</span> (11)99999-9999 
            </p>

            <button className="button">Encontrei!</button>
        </div>
      </div>
    );
  }

  return (
    <section className="perdidos">
      <h2>Seu animalzinho perdido pode estar por aqui.</h2>
      <div className="perdidos-list flex">{perdidosCards}</div>
    </section>
  );
};

export default Perdidos;