import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Title = styled.h2`
display: block;
padding-left: 20px;
`

export const Element = styled.li`
text-decoration: none;
list-style: none;
padding-bottom: 10px;
font-size: 1.1rem;
font-weight: 500;
`
export const LinkDetails = styled(Link)`
  color: #000;
  text-decoration: none;
  margin: 1px;

  &:hover,
  &:focus {
    color: #064e8a;
  }`
