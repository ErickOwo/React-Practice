import React, { useState } from "react";
import ButtonCalc from "@components/ButtonCalc";
import Pantalla from "@components/Pantalla";
import ButtonClear from "../components/buttonClearCalc";
import { evaluate } from "mathjs";

const ContainerCalculator = () => {

  const [input, setInput] = useState("");
  const addInput = val => {
    setInput(input + val);
  } 
  const clearInput = ()=>{
    setInput("");
  }
  const calcResult = () =>{
    const regex = /[+-]?\d+[+-\\*]\d+/.test(input);
    const regex2 = /\d/.test(input);
    if(input && regex && regex2) setInput(evaluate(input));
      else {
        if(!input) alert("Por favor ingrese valores para realizar los cálculos");
        else alert("La operación no ha podido realizarse correctamente");
    }
  }
  const delInput = () =>{
    setInput(input.substring(0, input.length-1));
  }

  return (
    <div className="container-calculator">
      <div className="calculator">
        <Pantalla input={input} />
        <div className="row">
          <ButtonCalc children="1" eventHandler={addInput} />
          <ButtonCalc children="2" eventHandler={addInput} />
          <ButtonCalc children="3" eventHandler={addInput} />
          <ButtonCalc children="+" eventHandler={addInput} />
        </div>
        <div className="row">
          <ButtonCalc children="4" eventHandler={addInput} />
          <ButtonCalc children="5" eventHandler={addInput} />
          <ButtonCalc children="6" eventHandler={addInput} />
          <ButtonCalc children="-" eventHandler={addInput} />
        </div>
        <div className="row">
          <ButtonCalc children="7" eventHandler={addInput} />
          <ButtonCalc children="8" eventHandler={addInput} />
          <ButtonCalc children="9" eventHandler={addInput} />
          <ButtonCalc children="*" eventHandler={addInput} />
        </div>
        <div className="row">
          <ButtonCalc children="=" eventHandler={calcResult} />
          <ButtonCalc children="0" eventHandler={addInput} />
          <ButtonCalc children="." eventHandler={addInput} />
          <ButtonCalc children="/" eventHandler={addInput} />
        </div>
        <div className="row">
          <ButtonClear eventHandler={clearInput}>Clear</ButtonClear>
          <ButtonClear eventHandler={delInput}>Del</ButtonClear>
        </div>
      </div>
    </div>
  );
};

export default ContainerCalculator;
