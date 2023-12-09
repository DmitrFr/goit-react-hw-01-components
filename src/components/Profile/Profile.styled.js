import styled from 'styled-components';

export const Container = styled('div')`
  max-width: 300px;
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Container_profile = styled('div')`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: rgb(244, 246, 249);
  font-size: 18px;
`;

export const Image = styled('img')`
  width: 50px;
  height: 50px;
  border: 1px solid gray;
  border-radius: 50%;
  background-color: tomato;
`;

export const Ul = styled('ul')`
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: rgb(232, 236, 242);
`;

export const Name = styled('p')`
  font-weight: 800;
`;

export const List = styled('li')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
