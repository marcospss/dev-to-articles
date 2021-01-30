import styled from 'styled-components';

export const Card = styled.article`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column;
  height: 100%;
  background-color: #fff;
  margin-bottom: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem;
  h1 {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  margin: 1rem;
`;

export const Tags = styled.div`
  font-size: 1rem;
  margin: 1rem;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  font-weight: bold;
`;
