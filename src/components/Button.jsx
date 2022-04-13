import React from "react";

const ButtonClicks = ({ text, isButtonClick, eventHandler })=>{
  return(
    <button
      className={(isButtonClick) ? "button button-click" : "button button-reload"}
      onClick={eventHandler}>
      {text}
    </button>
  );
}

export default ButtonClicks;