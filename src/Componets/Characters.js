import React, { PureComponent, Fragment, Component } from "react";

import axios from "axios";

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }
  componentWillMount() {
    const { characters } = this.state;
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((response) => {
        const data = response.data.results;
        this.setState({ characters: data });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        return [];
      });
  }

  componentDidUpdate() {
    console.log("this characters componentDidUpdate", this.state.characters);
  }
  render() {
    const { characters } = this.state;
    return (
      <Fragment>
        <section className="grid">
          {characters.map((character, index) => {
            return (
              <div className="card" key={index}>
                <img src={character.image} alt="" />
                <p>Nombre : {character.name}</p> <br />
                <p>Especie : {character.species}</p>
                <br />
                <button className="boton primario">Ver más</button>
              </div>
            );
          })}
        </section>
      </Fragment>
    );
  }
}
export default Characters;
