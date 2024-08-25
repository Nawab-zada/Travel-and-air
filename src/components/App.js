import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Abouts from "./components/Abouts";
import Sellable from './components/Sellable'
import Service from "./components/Service";
import Member from "./Member";
const App = () => {
  return (
    <div>
      <Home/>
      <Abouts/>
      <Member/>
      <Sellable/>
      <Service/>
      <Contact />
    </div>
  );
};

export default App;
