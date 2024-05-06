// --- COMPONENT : RESETBUTTO TO RELOAD THE PAGE

import React from "react";

function ResetButton() {
  function handleClick() {
    window.location.reload()
  }

  return <button onClick={handleClick}>RECOMMENCER LA PARTIE</button>;
}

export default ResetButton;
