import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Abouts from "./components/Abouts";
import Sellable from './components/Sellable'
import Services from './components/Service'

const App = () => {
  return (
    <div>
      <Home/>
      <Abouts/>
      <Contact />
      <Services/>
      <Sellable/>
    </div>
  );
};

export default App;
