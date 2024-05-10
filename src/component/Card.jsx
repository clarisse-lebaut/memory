import "./Card.css";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front card-style" src={card.src} alt="card front"></img>
        <img
          className="back card-style"
          src="../../src/assets/back.png"
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
}
