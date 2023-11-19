import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 0 16px;
  flex-wrap: wrap;

  input {
    font-size: 1rem;
    padding: 8px 32px 8px 8px;
    width: 250px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #064e8a;
    outline: none;
  }
`;

export const Button = styled.button`
  font-size: 1rem;
  padding: 8px 8px 8px 8px;
  background-color: transparent;
  border-bottom: 2px solid #064e8a;
  cursor: pointer;
`;
