import { useState } from "react";

import "./App.scss";

import CharacterCard from "./components/card";
import { Character } from "./types";
import Spinner from "./components/spinner";
import CharacterModal from "./components/modal";
import CustomPagination from "./components/pagination";

import useCharacters from "./hooks/useCharacters";
import logo from "./assets/logo.png";
import Error from "./components/error";

function App() {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, isError } = useCharacters(page);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );

  const handleCardClick = (character: Character) => {
    setSelectedCharacter(character);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  const onPageChange = (pageIndex: number) => {
    setPage(pageIndex);
  };

  return (
    <div className="app">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1> Characters</h1>
      </div>
      <div className="characters">
        {isLoading && <Spinner />}
        {isError && <Error errMsg="Loading failed" />}
        {!isLoading &&
          !isError &&
          data.results.map((character: Character) => (
            <CharacterCard
              key={character.name}
              character={character}
              onClick={() => handleCardClick(character)}
            />
          ))}
      </div>
      {data && data.count && (
        <CustomPagination
          total={data.count}
          hasNext={!!data.next}
          hasPrev={!!data.previous}
          onPageChange={onPageChange}
        />
      )}
      {selectedCharacter && (
        <CharacterModal
          isOpen={!!selectedCharacter}
          character={selectedCharacter}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default App;
