import React from "react";

import Navbar from "./components/navbar/Navbar";
import Summary from "./components/summary/Summary";
import Contact from "./components/contact/Contact";
import './App.css';

const App = () => {
    return (
      <div>
        <Navbar />
        <Summary />
        <Contact />
      </div>
    )
}

export default App