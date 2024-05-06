// import des css
import "./App.css";
// import des composants
import BoardGame from "./components/cardContainer";

function App() {
  return (
    <>
      <div className="main-container">
        <h1>Memory Game</h1>
        <BoardGame />
      </div>
    </>
  );
}

export default App;
