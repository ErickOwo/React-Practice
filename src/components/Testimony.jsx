import React from "react";

const Testimony = ({name, country, position, company, testimony, image})=>{
  return(
    <div className="content-testimony">
      <img 
        className="image-testimony"
        src={image} alt={`imágen de ${name}`} />
      <div className="content-text-testimony">
        <h4 className="name-testimony"><strong>{name}</strong> en {country}</h4>
        <h5 className="position-testimony">{position} en <strong>{company}</strong></h5>
        <p className="text-testimony">"{testimony}"</p>
      </div>
    </div>
  )
}

export default Testimony;