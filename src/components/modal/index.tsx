import ReactDOM from "react-dom";

import { Character } from "../../types";
import { formatDate } from "../../utils/formatDate";

import "./style.scss";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  character: Character;
};

const CharacterModal = ({ isOpen, onClose, character }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{character.name}</h2>
          <button onClick={onClose} className="modal-close-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />{" "}
            </svg>
          </button>
        </div>
        <div className="modal-body">
          <div className="titles">
            <p>Height: </p>
            <p>Mass: </p>
            <p>Created Date: </p>
            <p>Films: </p>
            <p>Birth Year: </p>
          </div>
          <div className="values">
            <p>{`${character.height} m`}</p>
            <p>{`${character.mass} kg`}</p>
            <p>{`${formatDate(character.created)}`}</p>
            <p>{`${character.films.length}`}</p>
            <p>{`${character.birth_year}`}</p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CharacterModal;
