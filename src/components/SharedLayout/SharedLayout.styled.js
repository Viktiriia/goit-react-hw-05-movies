import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Header = styled.header `
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 60px;
  box-shadow: 0 4px 2px -2px gray;
  padding-right: 30px;
`;

export const NavList = styled.ul`
list-style: none;
  display: flex;
  gap: 50px;
  font-size: 28px;
  font-weight: 500;
`;

export const Link = styled(NavLink)`
text-decoration: none;
color: black;
  &.active {
    color: gray;
    text-shadow: 4px 4px 5px rgba(192, 128, 206, 0.51);}
`;