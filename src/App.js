import React, { useState, useEffect } from "react";
import Footer from "./Componets/Footer";
import Navbar from "./Componets/Navbar";
import Characters from "./Componets/Characters";
import "./App.scss";

function App() {
  const [presupuesto, guardarPresupuesto] = useState(0);
  return (
    <div className="contenedor">
      <Navbar />
      <Characters />
      <Footer />
    </div>
  );
}

export default App;
