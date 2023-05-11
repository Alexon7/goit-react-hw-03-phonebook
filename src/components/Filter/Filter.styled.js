import styled from 'styled-components';

export const Text = styled.p`
  text-transform: uppercase;
  margin-bottom: 16px;
  font-size: 16px;
`;

export const Input = styled.input`
  width: 100%;
  min-width: 300px;
  max-width: 500px;
  padding: 16px;
  font-size: 20px;
  border: none;
  outline: 2px solid #ffffff;
  border-radius: 5px;
  background-color: #ffffff;
  color: #212121;
  transition: all cubic-bezier(0.25s, 0.7, 0.98, 0.86) 0s;
  &:focus {
    outline: 2px solid #808080;
    border-radius: 5px;
  }
`;
