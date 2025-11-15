import React, { useEffect, useState } from "react";
import "./Perdidos.css";

const Perdidos = () => {
  const [perdidos, setPerdidos] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.allorigins.win/raw?url=https://adotfy-api.vercel.app/pets-perdidos"
    )
      .then((res) => res.json())
      .then((data) => setPerdidos(data))
      .catch((err) => console.error("Erro ao buscar pets perdidos:", err));
  }, []);

  const perdidosCards = [];

  for (let i = 0; i < 8; i++) {
    const pet = perdidos[i];
    const imgPath = `/assets/images/perdidos/${i + 1}.jpg`;

    if (pet) {
      perdidosCards.push(
        <div key={pet.id || i} className="perdidos-card">
          <img src={imgPath} alt={`Pet perdido ${i + 1}`} />

          <div>
            <p>
              <span>Nome:</span> {pet.nome} <br />
              <span>Localização:</span> {pet.localizacao} <br />
              <span>Contato:</span> {pet.contato}
            </p>

            <button className="button">Encontrei!</button>
          </div>
        </div>
      );
    }
  }

  return (
    <section className="perdidos">
      <h2>Seu animalzinho perdido pode estar por aqui.</h2>
      <div className="perdidos-list flex">{perdidosCards}</div>
    </section>
  );
};

export default Perdidos;