import React from "react";
import "@styles/Counter-of-Clicks.css"
import CounterContainer from "@containers/Container-Counter";

const CounterOfClicks = ()=>{
  return(
    <div className="container-of-counter-of-clicks">
      <h2 className="title-clicks">freeCodeCamp</h2>
      <CounterContainer />
    </div>
  );
};

export default CounterOfClicks;