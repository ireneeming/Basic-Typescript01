import React from 'react';
import * as TS from './Card.styles';
import { ICardProps } from './CardType';

const Card = ({ name, imgUrl }: ICardProps) => {
  return (
    <TS.Wrapper>
      <p>{name}</p>
      <img src={imgUrl} />
    </TS.Wrapper>
  );
};

export default Card;
