import React from "react";

const ButtonClear = ({ children, eventHandler })=>{
  return(
    <div className="button-clear"
    onClick={eventHandler}>
      {children}
    </div>
  );
};

export default ButtonClear;