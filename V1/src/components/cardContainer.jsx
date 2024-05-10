// -- FUNCTION AND ACTION :
//  - schuffle cards
//  - clicker
//  - check the cards to find the pairs
//  -

//-------------------------------------------------------
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Cards from "./cards";
import ResetButton from "./resetBoutton";
import RandomButton from "./randomButton";

//-------------------------------------------------------

function BoardGame() {
  // clicker
  const [count, setCount] = useState(0);

  // mélanger les cartes
  const [cards, setCards] = useState([
    { id: 1, face: "red", dos: "gray" },
    { id: 2, face: "red", dos: "gray" },
    { id: 3, face: "blue", dos: "gray" },
    { id: 4, face: "blue", dos: "gray" },
    { id: 5, face: "yellow", dos: "gray" },
    { id: 6, face: "yellow", dos: "gray" },
    { id: 7, face: "green", dos: "gray" },
    { id: 8, face: "green", dos: "gray" },
  ]);

  const schuffleCards = () => {
    const schuffleCards = [...cards];
    for (let i = schuffleCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [schuffleCards[i], schuffleCards[j]] = [schuffleCards[j], schuffleCards[i]];
    }
    setCards(schuffleCards);
  };

  // vérifier correspondances des cartes
  const [selectedCards, setSelectedCards] = useState([]);
  const CheckCards = (index) => {
    console.log(index);
    // Mettre à jour les cartes sélectionner --> permet de l'aqvoir de manière assynchrone
    const newSelectedCards = [...selectedCards, index];
    setSelectedCards(newSelectedCards);
    // Condition d'éxécution du programme
    if (newSelectedCards.length === 2) {
      const firstCard = cards[newSelectedCards[0]].face;
      const secondCard = cards[newSelectedCards[1]].face; // ici je récupère l'id de la carte
      if (firstCard === secondCard) {
        console.log("cool");
        setSelectedCards([]);
        console.log(selectedCards);
      } else {
        console.log("manqué");
        console.log(selectedCards);
        setTimeout(() => {
          setSelectedCards([]);
          console.log("les cartes ne sont pas identiques, retour sur le face grise");
          console.log(
            "c'est ici que tu dois mettre à jour l'état de la carte, on s'en fout de ce qui se passe en dehors de la fonction"
          );
        }, 1500);
      }
    }
  };

  return (
    <div>
      <div className="button-container">
        <RandomButton onClick={schuffleCards} />
        <ResetButton />
        <button className="click-button" onClick={() => setCount((count) => count + 1)}>
          DEFOULE TON CLICK : {count}
        </button>
        ;
      </div>

      <div className="body-container">
        {cards.map((card, index) => (
          <Cards
            key={card.id}
            face={card.face}
            dos={card.dos}
            CheckCards={() => CheckCards(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default BoardGame;
