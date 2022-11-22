import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 2;
  font-size: 20px;
  color: rgb(94, 84, 57);
  margin-bottom: 30px;
`;

export const FilterInput = styled.input`
  width: 250px;
  height: 25px;
  color: rgb(94, 84, 57);
  background-color: rgb(225, 234, 235);
  border: 2px solid rgb(94, 84, 57);
  margin: auto;
`;
