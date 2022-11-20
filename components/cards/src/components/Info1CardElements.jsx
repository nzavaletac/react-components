import styled from "styled-components";

export const Card = styled.div`
  width: 190px;
  height: 120px;
  transition: all 0.5s;
  box-shadow: 15px 15px 30px rgba(25, 25, 25, 0.11),
    -15px -15px 30px rgba(60, 60, 60, 0.082);
  text-align: center;
  overflow: hidden;
  &:hover {
    height: 254px;
    background: linear-gradient(360deg, #edededc5 60%, hsla(0, 0%, 13%, 1) 70%);
    Header {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 96%);
    }
    Card {
      Header {
        Title {
          padding: 0;
        }
      }
    }
  }
  Header {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #212121;
    margin-bottom: 16px;
    ImgBox {
      width: 50px;
    }
    Title {
      font-size: 1.1em;
      letter-spacing: 0.1em;
      font-weight: 500;
      text-transform: uppercase;
      padding: 4px 0 14px 0;
      transition: all 0.5s;
      color: #edededc5;
    }
  }
  Content {
    display: block;
    text-align: justify;
    color: #212121;
    margin: 0 18px;
    Text {
      transition: all 0.5s;
      font-size: 1em;
      margin-bottom: 8px;
    }
    BtnLink {
      color: #1d8122;
      cursor: pointer;
      transition: all 0.5s;
      font-size: 0.8rem;
      font-weight: 500;
      text-transform: uppercase;
      &:hover {
        border-bottom: 1px solid #1d8122;
      }
    }
  }
`;

export const Header = styled.div``;

export const ImgBox = styled.div`
  svg {
    width: 100px;
  }
`;

export const Title = styled.h1``;

export const Content = styled.div``;

export const Text = styled.p``;

export const BtnLink = styled.a``;
