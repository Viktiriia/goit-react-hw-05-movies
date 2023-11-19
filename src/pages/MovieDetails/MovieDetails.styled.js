import styled from "styled-components";
import { Link } from 'react-router-dom';

export const BackButton = styled(Link)`
 margin-left: 50px;
  border: 2px solid black;
  border-radius: 5px;
  font-size: 18px;
  display: flex;
  justify-content: space-around;
  width: 100px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: black;
  text-decoration: none;

  &:hover {
    box-shadow: 1px 2px 2px 2px gray;
  }
`;

export const Container = styled.div`
  display: flex;

  padding: 50px;
  box-shadow: 0 4px 2px -2px gray;
  gap: 20px;
`
export const List = styled.ul`
 display: flex;
`
export const LinkEl = styled.li`
   border: 2px solid black;
  border-radius: 5px;
 display: flex;
  justify-content: center;
  width: 100px;
  list-style: none;
  padding: 8px 16px;
  margin: 0 16px 16px 0;
  font-size: 18px;
  cursor: pointer;
`

export const Links = styled(Link)`
 color: #000;
  text-decoration: none;
`


export const AdditionalInfo = styled.div`
padding-left: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0 4px 2px -2px gray;
`
export const MoviesList = styled.div`
display: flex;
flex-wrap: wrap;
gap: 15px;
padding-top: 15px;
`

export const Title = styled.h3`
width: 200px;
text-decoration: none;
`