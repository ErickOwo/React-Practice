import React from "react";
const image = "@images/testimonio.png";

const Testimonio = ()=>{
  return(
    <div className="contenedor-testimonio">
      <image 
        className="imagen-testimonio"
        src={require(`${image}`)}/>
    </div>
  )
}

export default Testimonio;