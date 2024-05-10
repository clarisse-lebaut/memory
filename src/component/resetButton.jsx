import React from "react";

function ResetButton(props) {
  const handleClick = () => {
    window.location.reload()
  };
  return <button onClick={handleClick}>{props.text}</button>;
}

export default ResetButton;
