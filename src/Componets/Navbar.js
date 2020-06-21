import React, { Component, Fragment } from "react";

class Navbar extends Component {
  componentDidMount() {
    console.log("desde mounted");
  }
  render() {
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
            <button className="sitch" id="switch">
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
  }
}

export default Navbar;
