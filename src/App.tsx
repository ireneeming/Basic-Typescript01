import * as TS from './App.styles';
import React, { useState } from 'react';
import Card from 'components/Card';
import { fetchCharacter } from './api';
import { Character } from './api';

function App() {
  const [character, setCharacter] = React.useState<Character>({} as Character);
  const [isLoading, setIsLoading] = React.useState(false);
  const [characterId, setCharacterId] = React.useState(1);

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
    <TS.Wrapper>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Card name={character.name} imgUrl={character.img_url} />
          <button
            onClick={() => {
              setCharacterId(Math.floor(Math.random() * 10) + 1);
            }}>
            Random Character
          </button>
        </>
      )}
    </TS.Wrapper>
  );
}

export default App;
