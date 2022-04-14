import React from "react";
import "@styles/Home.css"

const Home = ()=>{
  return(
    <div className="home-container">
      <div className="home-content">
        <h1 className="principal-title">Practica con React</h1>
        <a className="anchor" href="/testimonials">Testimonios</a>
        <a className="anchor" href="/counter-of-clicks">Contador de Clicks</a>
        <a className="anchor" href="/calculator">Calculadora</a>
        <a className="anchor" href="/tasks">Tareas</a>
      </div>
    </div>
  );
};

export default Home;