import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function App({ character }) {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="modal">
      <button onClick={openModal}>Details</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>x</button>

        <form className="form">
          <br />
          <img src={character.image} alt="" />
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{character.name} </h2>
          <p> Name: {character.name}</p>
          <p>specie : {character.species}</p>
          <p> Status : {character.status}</p>
          <p> Gender : {character.gender}</p>
          <p> Origin : {character.origin.name}</p>
        </form>
      </Modal>
    </div>
  );
}

export default App;
