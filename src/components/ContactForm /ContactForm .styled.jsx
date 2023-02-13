import styled from 'styled-components';


export const Button = styled.button`
  background-color: #5b9962;
  color: white;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  font-weight: 600;
  text-transform: capitalize;
   &:hover {
   background-color : #8bc34a;
  }
`;

export const Input = styled.input`
display: block;
border: 1px solid black;
&:hover {
  border-color : #8bc34a;
  outline: none;
  }
`;
export const Form = styled.form`
width: 30%;
`;
export const Label = styled.label`
display: block;
padding-bottom: 10px;

`;