import styled, { css } from "styled-components";
import { NavLink } from 'react-router-dom';
import { bounceDown, bounceDown2 } from "../../assets/style/style";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";

export const Header = styled.header`
  background-color: transparent;
  position: relative;
  width: 100%; 
  padding: 0 20px 0 20px;
  z-index: 1;
  animation: 1s;
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.1);
  
  ${({ fixed }) => fixed && css`
    background: white;
    left: 0;
    margin: 0 auto;
    max-width: 100vw;
    padding: 5px;
    position: fixed;
    right: 0;
    top: 0px;
    z-index: 1;
    ${bounceDown2()}
  `}
`

export const Nav = styled.nav`
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`

export const NavItem = styled.li`
  font-size: 18px;
  font-weight: 500;
`

export const IconOpen = styled(AiOutlineAlignRight)`
  font-size: 32px;
  color: #000;
  cursor: pointer;
  transition: 0.5s;
  font-weight: 600;
  &:hover {
    transition: 0.5s;
    padding: 1px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  @media (min-width: 992px){
    display: none;
  }
`

export const IconClose = styled(AiOutlineClose)`
  font-size: 32px;
  color: #000;
  cursor: pointer;
  transition: 0.5s;
  font-weight: 600;
  &:hover {
    transition: 0.5s;
    padding: 1px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  @media (min-width: 992px){
    display: none;
  }
`

export const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 30px;
  list-style: none;
  text-align: center;
  justify-content: end;
  margin: 0;
  z-index: 10;
  @media (max-width: 992px){
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 80px;
    left: 0;
    background: rgb(255,255,255);
    display: flex;
    flex-direction: column;
    padding: 20px 0 30px 0;
    z-index: 11;
    transform: translateX(-100%);
    transition: transform 1s cubic-bezier(1, 0, 0, 1);
    ${({ active }) => active && css`
      transform: translateX(0);
      transition: transform 1s cubic-bezier(1, 0, 0, 1);
    `}
  }
`

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #000;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  &[aria-current] {
    font-weight: 700;
    &:after {
      content: '-';
      position: absolute;
      margin-top: 20px;
      font-size: 34px;
      line-height: 20px;
    }
  }
  &:hover {
    color: #000;
    &:after {
      ${bounceDown()}
      content: '-';
      position: absolute;
      margin-top: 20px;
      font-size: 34px;
      line-height: 20px;
    }
  }
`