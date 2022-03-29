import * as TS from './App.styles';
import React, { useState } from 'react';
import Card from 'components/Card';
import { fetchCharacter } from './api';
import Item from 'components/Card/Item';
import { Character } from './api';

function App() {
  const [character, setCharacter] = React.useState<Character>({} as Character);
  const [isLoading, setIsLoading] = React.useState(false);
  const [characterId, setCharacterId] = React.useState(1);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log(e.currentTarget);
    setCharacterId(Number(inputRef.current?.value));
  };

  React.useEffect(() => {
    const fetchFromApi = async () => {
      setIsLoading(true);

      const result = await fetchCharacter(characterId);
      setIsLoading(false);
      setCharacter(result);
    };
    fetchFromApi();
  }, [characterId]);

  return (
    <TS.Wrapper characterId={characterId}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Card name={character.name} imgUrl={character.img_url} />
          <p>character ID : {characterId}</p>
          <TS.Gender gender={character.gender}>{character.gender}</TS.Gender>
          <input type="text" ref={inputRef} />
          <Item item={character} onClick={(item) => console.log(item.hair)} />
          <button onClick={handleButtonClick}>Random Character</button>
        </>
      )}
    </TS.Wrapper>
  );
}

export default App;
