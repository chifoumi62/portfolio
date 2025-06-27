import "./bodyApropos.css";
import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function BodyApropos({ item }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="body-apropos">
      <button
        onClick={() => setModalIsOpen(true)}
        className="body-apropos__button"
      >
        {item.titre}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="A propos de moi"
        className="modal"
      >
        <div className="modal__header">
          <h2 className="modal__title">{item.titre}</h2>
          <p className="modal__text">{item.description}</p>
          <button
            onClick={() => setModalIsOpen(false)}
            className="modal__close-button"
          >
            Fermer
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default BodyApropos;
