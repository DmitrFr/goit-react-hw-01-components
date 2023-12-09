import styled from 'styled-components';

export const List = styled('li')`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const Span = styled.span`
  content: '';
  margin-left: 10px;
  display: block;
  border: 1px solid black;
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;

export const Image = styled('img')`
  width: 50px;
  height: 50px;
  border: 1px solid gray;
  border-radius: 50%;
  background-color: tomato;
`;
