import React from "react";
import "./Pets.css";

const Pets = () => {
  const petCards = [];

  for (let i = 0; i < 8; i++) {
    petCards.push(
      <div key={i} className="pet-card">
        <img src="/assets/images/pets_icon.png" alt="" />
        <div>
            <p>
                <span>Nome:</span> Miau Primeiro <br/>
                <span>Raça:</span> SRD <br/>
                <span>Idade:</span> 3 anos <br/>
                <span>Sexo:</span> Macho <br/>
                <span>Localização:</span> São Carlos - SP
            </p>

            <button className="button">Adotar</button>
        </div>
      </div>
    );
  }

  return (
    <section className="pets">
      <h2>Conheça nossos pets</h2>
      <div className="pet-list flex">{petCards}</div>
      <button className="button"><a href="pets.html">Ver mais</a></button>
    </section>
  );
};

export default Pets;