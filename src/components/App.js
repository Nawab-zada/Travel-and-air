import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Abouts from "./components/Abouts";
import Sellable from './components/Sellable'
import Service from "./components/Service";
const App = () => {
  return (
    <div>
      <Home/>
      <Abouts/>
      <Sellable/>
      <Service/>
      <Contact />
    </div>
  );
};

export default App;
