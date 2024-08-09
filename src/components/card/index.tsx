import { Character } from "../../types";

import "./style.scss";

interface CharacterCardProps {
  character: Character;
  onClick: () => void;
}

const CharacterCard = ({ character, onClick }: CharacterCardProps) => {
  return (
    <div className="character-card" onClick={onClick}>
      <img
        loading="lazy"
        src={`https://picsum.photos/200?random=${character.name}`}
        alt={character.name}
      />
      <div className="card-detail">
        <p>{character.name}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
