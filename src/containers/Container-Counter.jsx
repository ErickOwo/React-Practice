import React, {useState} from "react";
import Button from "@components/Button";
import Counter from "@components/Counter";

const CounterContainer = ()=> {

  const [numClicks, setNumClicks] = useState(0);  

  const eventHandlerClick = ()=>{
    setNumClicks(numClicks + 1);
  }
  const reload = ()=>{
    setNumClicks(0);
  }

  return(
    <div className="principal-content">
      <Counter
        numClicks={numClicks}
      />
      <Button
        text="Clic"
        isButtonClick={true}
        eventHandler={eventHandlerClick}
      />
      <Button
        text="Reiniciar"
        isButtonClick={false}
        eventHandler={reload}
      />
    </div>
  );
}

export default CounterContainer;