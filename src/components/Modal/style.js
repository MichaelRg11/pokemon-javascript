import styled, { css } from 'styled-components'
import { bounceLeft } from '../../assets/style/style'

export const ModalContainer = styled.div`
  ${({ show }) => show === true ? css`
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.527);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 100;
  ` : css`
    background-color: rgba(255, 255, 255, 1);
    display: none;
  `}
`

export const ModalContent = styled.div`
    width: 520px;
    height:90vh;
    border-radius: 0px 10px 10px 0px;
    background-color: #fff;
    padding: 10px;
    overflow-y: scroll;
    ${bounceLeft()}

    &::-webkit-scrollbar {
      width: 6px;     
      height: 4px;   
      display: block;  
    }
    &::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #b3b3b3;
      box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);
    }
`

export const ModalBody = styled.div`
  position: relative;
  padding: 10px
`

export const Close = styled.button`
  position: absolute;
  right: 0px;
  top: 0px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #dcdbdb;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    padding: 1px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`