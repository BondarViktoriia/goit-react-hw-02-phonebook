import styled from 'styled-components';

export const Form = styled.form`
  border: 5px solid rgb(94, 84, 57);
  border-radius: 4px;

  width: 400px;
  height: 275px;
  margin: auto;
  background-color: rgb(225, 234, 235);
  margin-bottom: 20px;
`;
export const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 2;
  font-size: 20px;
  color: rgb(94, 84, 57);
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 250px;
  height: 25px;
  color: rgb(94, 84, 57);
  background-color: rgb(225, 234, 235);
  border: 2px solid rgb(94, 84, 57);
  margin-left: 73px;
`;
export const ButtonAdd = styled.button`
  width: 110px;
  height: 45px;
  text-transform: uppercase;
  background-color: rgb(250, 184, 2);
  color: rgb(94, 84, 57);
`;
