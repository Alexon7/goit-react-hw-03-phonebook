import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 300px;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const Label = styled.label`
  display: block;
  text-transform: uppercase;
  font-size: 16px;
  margin-bottom: 16px;
  background-color: transparent;
`;

export const Input = styled.input`
  width: 100%;
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

export const Button = styled.button`
  font-size: 20px;
  text-transform: uppercase;
  background-color: #808080;
  color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 5px;
  padding: 10px 4px;
  margin-top: 40px;
  margin-bottom: 40px;
  transition: all cubic-bezier(0.25s, 0.7, 0.98, 0.86) 0s;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #ffffff;
    border: 2px solid #808080;
    color: #808080;
  }
`;
