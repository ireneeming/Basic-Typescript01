import * as TS from './App.styles';
import React, { useState } from 'react';
import Card from 'components/Card';
import { fetchCharacter } from './api';
import { Character } from './api';

function App() {
  return (
    <TS.Wrapper>
      <Card name="minji" imgUrl="https://finalspaceapi.com/img/gary_goodspeed.webp" />
    </TS.Wrapper>
  );
}

export default App;
