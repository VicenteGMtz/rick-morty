import React, { Component, Fragment, useEffect } from "react";

const Navbar = () => {
  const changeMode = () => {
    const btnSwitch = document.querySelector("#switch");

    btnSwitch.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      btnSwitch.classList.toggle("active");
    });
  };

  useEffect(() => {
    changeMode();
  }, []);
  return (
    <Fragment>
      <nav>
        <a className="logotipo" href="#">
          Rick & Morty
        </a>
        <div className="enlaces">
          <a
            href="https://github.com/VicenteGMtz/rick-morty.git"
            target="_blank"
          >
            GitHub
          </a>
          <button className="sitch" id="switch" onChange={changeMode}>
            <span>
              <i className="fas fa-sun"></i>
            </span>
            <span>
              <i className="fas fa-moon"></i>
            </span>
          </button>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
