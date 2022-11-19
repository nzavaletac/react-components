import styled from "styled-components";

export const Card = styled.div`
  width: 200px;
  height: 350px;
  padding: 0.8em;
  background: #f5f5f5;
  position: relative;
  overflow: visible;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin: 10px;
  font-family: "Montserrat", sans-serif;
`;

export const CardImg = styled.img`
  background-color: #ffcaa6;
  height: 50%;
  width: 100%;
  border-radius: 0.5rem;
  transition: 0.3s ease;
  &:hover {
    transform: translateY(-25%);
  }
`;

export const CardInfo = styled.div`
  padding-top: 2%;
`;

export const TextTitle = styled.p`
  font-weight: 900;
  font-size: 1.2em;
  line-height: 1.5;
`;

export const TextBody = styled.p`
  font-size: 0.9em;
  padding-bottom: 10px;
`;

export const CardFooter = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  border-top: 1px solid #ddd;
`;

export const CardButton = styled.div`
  border: 1px solid #252525;
  display: flex;
  padding: 0.3em;
  cursor: pointer;
  border-radius: 50px;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #fff;
    border: 1px solid #2d2e2e;
    background-color: #252525;
  }
`;
