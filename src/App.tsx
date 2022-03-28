import * as TS from './App.styles';
import React, { useState } from 'react';
import Card from 'components/Card';
import { fetchCharacter } from './api';
import { Character } from './api';

function App() {
  const [character, setCharacter] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [characterId, setCharacerId] = React.useState(1);

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
        <Card name="minji" imgUrl="https://finalspaceapi.com/img/gary_goodspeed.webp" />
      )}
    </TS.Wrapper>
  );
}

export default App;
