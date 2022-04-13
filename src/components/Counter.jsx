import React from "react";

const Counter = ({ numClicks })=>{
  return(
    <div className="counter">
      {numClicks}
    </div>
  );
}

export default Counter;