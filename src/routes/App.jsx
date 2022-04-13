import React from "react";
import Layout from "../containers/Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound";
import Testimonials from "../pages/Testimonials";

const App = ()=>{
    return(
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/testimonios" element={<Testimonials/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    );
};

export default App;