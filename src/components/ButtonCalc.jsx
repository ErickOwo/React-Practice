import React from "react";

const ButtonCalc = ({ children, eventHandler })=>{
  const isOperator = valor =>{
    return /[\d\.\=]/.test(valor);
  };

  return(
    <div
      className={`button-content ${!isOperator(children) ? "operator" : ""}`.trim()} 
      onClick={()=>eventHandler(children)}>
      {children}
    </div>
  );
};

export default ButtonCalc;