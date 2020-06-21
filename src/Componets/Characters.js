import React, { Fragment, useEffect, useState } from "react";
import Character from "./Character";

import axios from "axios";

const Characters = () => {
  const [characters, getCharacters] = useState([]);
  const consultaApi = async () => {
    const api = await axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((response) => {
        const data = response.data.results;
        console.log("data: >>>", data);
        getCharacters(data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        return [];
      });
  };

  useEffect(() => {
    consultaApi();
  }, []);
  return (
    <Fragment>
      <section className="grid">
        <Character characters={characters} />
      </section>
    </Fragment>
  );
};

export default Characters;

// componentWillMount() {
//   const { characters } = this.state;
//   axios
//     .get("https://rickandmortyapi.com/api/character/")
//     .then((response) => {
//       const data = response.data.results;
//       this.setState({ characters: data });
//     })
//     .catch((error) => {
//       // handle error
//       console.log(error);
//     })
//     .then(() => {
//       return [];
//     });
// }
