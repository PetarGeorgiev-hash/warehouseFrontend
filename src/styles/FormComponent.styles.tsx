import styled from "styled-components";

export const FormComponent = styled.form`
  height: 25rem;
  width: 25rem;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 3px 4px 2px black;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

export const FormWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormLabel = styled.label`
  color: black;
`;

export const FormInput = styled.input`
  font-size: larger;
  border-radius: 8px;
  height: 3rem;
  width: 20rem;
  background-color: #ffffff;
  border: 1px solid gray;
  color: black;
  margin-bottom: 1rem;
`;

export const FormButton = styled.button`
  background-color: #40a2e3;
  height: 6rem;
  width: 10rem;
  border: 8px;
  cursor: pointer;
  margin: 2rem;
  transition: all 1s;
  &:hover {
    background-color: #005b98;
  }
`;

export const FormP = styled.p`
  color: red;
`;
