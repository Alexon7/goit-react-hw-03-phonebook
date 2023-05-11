import styled from 'styled-components';

export const List = styled.ul`
  min-width: 300px;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 28px;
`;

export const Item = styled.li`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-size: 20px;
  margin-bottom: 12px;
`;

export const Text = styled.p`
  font-size: 20px;
`;

export const Button = styled.button`
  font-size: 20px;
  text-transform: uppercase;
  background-color: #808080;
  color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 5px;
  padding: 5px 2px;
  transition: all cubic-bezier(0.25s, 0.7, 0.98, 0.86) 0s;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #ffffff;
    border: 2px solid #808080;
    color: #808080;
  }
`;
