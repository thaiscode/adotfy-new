import React, { useEffect, useState } from "react";
import "./Pets.css";

const Pets = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("https://api.allorigins.win/raw?url=https://adotfy-api.vercel.app/pets")
      .then((res) => res.json())
      .then((data) => setPets(data))
      .catch((err) => console.error("Erro ao buscar pets:", err));
  }, []);

  const petCards = [];

  for (let i = 0; i < 8; i++) {
    const pet = pets[i];
    const imgPath = `/assets/images/adocao/${i + 1}.jpg`;

    if (pet) {
      petCards.push(
        <div key={pet.id} className="pet-card">
          <img src={imgPath} alt={pet.nome} />

          <div>
            <p>
              <span>Nome:</span> {pet.nome} <br />
              <span>Raça:</span> {pet.raca} <br />
              <span>Idade:</span> {pet.idade} <br />
              <span>Sexo:</span> {pet.sexo} <br />
              <span>Localização:</span> {pet.localizacao}
            </p>

            <button className="button">Adotar</button>
          </div>
        </div>
      );
    }
  }

  return (
    <section className="pets">
      <h2>Conheça nossos pets</h2>

      <div className="pet-list flex">{petCards}</div>

      <button className="button">
        <a href="pets.html">Ver mais</a>
      </button>
    </section>
  );
};

export default Pets;
