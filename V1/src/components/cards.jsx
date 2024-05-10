// --- COMPONENT : THE CARDS
// -- ACTION :
//  - flip the cards on the click
//  -

import React, { useState } from "react";

function Cards(props) {
  // constante qui permet de générer un style à la carte
  const stylefacecard = {
    backgroundColor: props.dos,
  };
  const stylebackcard = {
    backgroundColor: props.face,
  };

  // variable pour faire retourner les cartes au clic
  const [isFlipped, setIsFlipped] = useState(false); // hook pour gérer le state de la carte

  // ----- fonction pour retourner les cartes au clic
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  // --- le return permet d'envoyer les infomations dans les autres fichiers
  return (
    <div className="card-container">
      <div
        className={`card ${isFlipped ? "flipped" : ""}`}
        onClick={() => {
          handleClick();
          props.CheckCards();
        }}
      >
        <div className="side side--front" style={stylefacecard}>
          Dos
        </div>
        <div className="side side--back" style={stylebackcard}>
          Face
        </div>
      </div>
    </div>
  );
}

export default Cards;
