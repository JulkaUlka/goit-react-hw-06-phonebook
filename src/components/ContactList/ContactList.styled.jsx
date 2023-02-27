import styled from 'styled-components';


export const Button = styled.button`
  background-color: #cf3535;
  color: white;
  margin-left: 20px;
  padding: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  font-weight: 600;
  text-transform: capitalize;
  
  &:hover {
   background-color : #e91e63;
  }
`;
export const List = styled.ul`
display: flex;
flex-direction: column;

gap: 0.5em;`;
export const Item = styled.li`
display: flex;
justify-content: space-between;
width: 30%;
`;
