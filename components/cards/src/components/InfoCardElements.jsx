import styled from "styled-components";

export const Card = styled.div`
  width: 190px;
  height: 300px;
  border-radius: 1em;
  padding: 1.9rem;
  background: #f5f5f5;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 20px rgba(43, 8, 37, 0.2);
  font-family: "Montserrat", sans-serif;
  margin: 10px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    /* background: rgba(238, 116, 116, 0.4); */
    z-index: 2;
    transition: 0.5s;
  }
  &:hover {
    transform: translateY(5%);
  }
  &:hover:before {
    opacity: 1;
    backdrop-filter: blur(1.5px);
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const CardInfo = styled.div`
  position: relative;
  z-index: 3;
  color: #f5f5f5;
  opacity: 0;
  transform: translateY(20%);
  transition: 0.5s;

  &:hover {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const TextBody = styled.p`
  letter-spacing: 1px;
  font-size: 0.9rem;
  margin: 5px 0 15px 0;
`;

export const CardButton = styled.button`
  padding: 0.6rem;
  outline: none;
  border: none;
  border-radius: 4px;
  background: #ee9ca7;
  color: white;
  font-weight: bold;
  transition: 0.4s ease;
  &:hover {
    background: rgba(218, 77, 77, 0.4);
    color: #f5f5f5;
  }
`;
