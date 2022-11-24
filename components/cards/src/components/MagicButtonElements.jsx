import styled, { keyframes } from "styled-components";

const glowing = keyframes`
0% {
    background-position: 0 0;
}
50% {
    background-position: 400% 0;
}
1005 {
    background-position: 0 0;
}
`;

export const Container = styled.div`
  width: auto;
  margin: 10px;
`;

export const Button = styled.button`
  background: black;
  height: auto;
  cursor: pointer;
  border: none;
  padding: 16px 32px;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  position: relative;
  border-radius: 12px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      red,
      blue,
      deeppink,
      blue,
      red,
      blue,
      deeppink,
      blue
    );
    background-size: 800%;
    border-radius: 10px;
    filter: blur(8px);
    animation: ${glowing} 20s linear infinite;
  }
`;
