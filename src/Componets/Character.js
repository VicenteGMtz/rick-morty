import React, { Fragment } from "react";
import Modal from "./Modal";

const Character = ({ characters }) => (
  <Fragment>
    {characters.map((character) => (
      <div className="card" key={character.id}>
        <img src={character.image} alt="" />
        <div className="info">
          <br />
          <p>Nombre : {character.name}</p> <br />
          {/* <p>Especie : {character.species}</p> */}
          {/* <button className="boton primario">Ver más</button> */}
          <Modal className="modal" character={character} />
        </div>
      </div>
    ))}
  </Fragment>
);

export default Character;
