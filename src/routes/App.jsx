import React from "react";
import Layout from "../containers/Layout";
import "../styles/style.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound";
import Testimonio from "../pages/Testimonio";

const App = ()=>{
    return(
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/testimonios" element={<Testimonio/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    );
};

export default App;