import React from "react";
import Layout from "@containers/Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "@pages/Home"
import NotFound from "@pages/NotFound";
import Testimonials from "@pages/Testimonials";
import CounterOfClicks from "@pages/Counter-of-Clicks";
import Calculator from "@pages/Calculator";
import Tasks from "@pages/Tasks";

const App = ()=>{
    return(
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/testimonials" element={<Testimonials/>}/>
            <Route path="/counter-of-clicks" element={<CounterOfClicks/>}/>
            <Route path="/calculator" element={<Calculator/>}/>
            <Route path="/tasks" element={<Tasks/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    );
};

export default App;