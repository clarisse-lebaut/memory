// -- FUNCTION AND ACTION :
//  - schuffle cards
//  - clicker
//  - check the cards to find the pairs
//  -

import React from "react";
import { useState } from "react";
import Cards from "./cards";
import ResetButton from "./resetBoutton";
import RandomButton from "./randomButton";
import SuccesMessage from "./successMessage";

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

  // -------
  // vérifier correspondances des cartes
  const [selectedCards, setSelectedCards] = useState([]);
  const [yesMessage, setYesMessage] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false); // hook pour gérer le state de la carte

  const CheckCards = (index) => {
    console.log(index);
    const newSelectedCards = [...selectedCards, index];
    setSelectedCards(newSelectedCards);

    if (newSelectedCards.length === 2) {
      const firstCard = cards[newSelectedCards[0]].face;
      const secondCard = cards[newSelectedCards[1]].face;
      if (firstCard === secondCard) {
        console.log("cool");
        setIsFlipped(true);
        setSelectedCards([]);
        console.log(selectedCards);
        setYesMessage("Nombres de paires trouvée : {4}");
      } else {
        console.log("manqué");
        setIsFlipped(false);

        // Au lieu de vider immédiatement selectedCards, nous utilisons setTimeout
        // pour le faire après un délai de 1000ms (1 seconde)
        setTimeout(() => {
          setSelectedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div>
      <div className="button-container">
        <RandomButton onClick={schuffleCards} />
        <ResetButton message={yesMessage} />
        <button className="click-button" onClick={() => setCount((count) => count + 1)}>
          DEFOULE TON CLICK : {count}
        </button>
        ;
      </div>

      <div>
        <SuccesMessage />
      </div>

      <div className="body-container">
        {cards.map((card, index) => (
          <Cards
            key={card.id}
            face={card.face}
            // ajouter un paramètre qui permet de récupérer le flipped ici pour le mettre a false et permettre le retournement de lac carte si elle ne correspondent pas
            isFlipped={isFlipped}
            dos={card.dos}
            CheckCards={() => CheckCards(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default BoardGame;
