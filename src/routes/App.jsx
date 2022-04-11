import React from "react";
import Layout from "../containers/Layout";
import "../styles/style.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound";

const App = ()=>{
    return(
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    );
};

export default App;