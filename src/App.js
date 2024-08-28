import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Abouts from "./components/Abouts";
import Sellable from './components/Sellable'
import Services from './components/Service'
import Member from "./components/Member";
const App = () => {
  return (
    <div>
      <Home/>
      <Abouts/>
      <Member/>
      <Services/>
      <Sellable/>
      <Contact />
    </div>
  );
};

export default App;
