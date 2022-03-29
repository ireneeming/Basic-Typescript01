import styled from 'styled-components';
//npm i --save-dev @type/styled-components 설치하기

type IMainProps = {
  characterId: number;
};

type IGenderProps = {
  gender: string;
  className?: string;
};

export const Wrapper = styled.div<IMainProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  padding-top: 20px;
  button {
    margin-top: 20px;
    height: 40px;
    border-radius: 10px;
    border: 0;
    background: ${(IMainProps) => (IMainProps.characterId > 5 ? 'orange' : 'green')};
    color: white;
    padding: 0 10px;
    cursor: pointer;
  }
`;

export const Gender = styled.p<IGenderProps>`
  color: ${(IGenderProps) => (IGenderProps.gender == 'Male' ? 'blue' : 'pink')};
`;
