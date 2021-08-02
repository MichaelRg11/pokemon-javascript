import styled from 'styled-components';
import { fadeIn } from '../../assets/style/style';

export const Card = styled.article`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  border: 1px solid ${({ border }) => border};
  padding: 20px 20px;
  background:  ${({ color }) => color};
  cursor: pointer;
  box-shadow: 0 0px 14px rgb(0, 0, 0, 0.2);
  ${fadeIn({ time: '1.2s' })}
`

export const Title = styled.h4`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 10px;
  color: ${({ color }) => color};

  overflow: hidden; 
  text-overflow: ellipsis;
  display: -webkit-box; 
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  -webkit-overflow: hidden;
`

export const P = styled.p`
  margin-left: 10px;
  overflow: hidden; 
  text-overflow: ellipsis;
  display: -webkit-box; 
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  -webkit-overflow: hidden;
`

export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 18px;
  margin: 10px 5px 0 10px;
  background-color: ${({ color }) => color};
`

export const Img = styled.img`
  height: auto;
  max-height: 160px;
  width: 140px;
  ${fadeIn({ time: '0.8s' })}
`