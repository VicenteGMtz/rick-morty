import React, { useState, useEffect } from "react";
import Footer from "./Componets/Footer";
import Navbar from "./Componets/Navbar";
import Characters from "./Componets/Characters";

function App() {
  return (
    <div className="contenedor">
      <Navbar />
      <Characters />
      <Footer />
    </div>
  );
}

export default App;
