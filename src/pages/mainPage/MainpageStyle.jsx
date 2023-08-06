// MainpageStyle.jsx

import { styled } from "styled-components";
import example from "../../image/example.png";

export const MainContainer = styled.nav`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 5%;
  margin-right: 5%;
  border: 3px solid;
`;

export const BackgroundImage = styled.img`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 90px;
  object-fit: contain;
  opacity: 60%;
  z-index: -2;
`;

export const TextImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
  img {
    width: 100%;
    height: auto;
  }
`;

export const BottomContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-bottom: 3%;
  justify-content: space-around;
  padding: 3%;
  /* border: 3px solid blue; */
`;

export const OneAndOnlyContainer = styled.div`
  position: relative;
  display: flex;
  margin-top: 8%;
  width: 500px;
  height: 30rem;
  flex-wrap: wrap;
  /* border: 3px solid red; */
`;

export const OneAndOnly = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  /* border: 3px solid blue; */
  img {
    display: flex;
    width: 44px;
    height: 30px;
    margin-top: 1%;
  }
  p {
    display: flex;
    margin-left: 3%;
    align-items: center;
    font-family: Roboto Mono;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
    width: 40rem;
    height: 44px;
  }
`;

export const RecordCard = styled.div`
  display: flex;
  position: relative;
  width: 500px;
  height: 165px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px #00000040;
  /* border: 3px solid yellow; */
`;

export const VoteContainer = styled.div`
  position: relative;
  display: flex;
  margin-top: 10%;
  width: 500px;
  flex-wrap: wrap;
  justify-content: space-between;
  /* border: 3px solid pink; */
`;

export const Vote = styled.div`
  display: flex;
  width: 545px;
  height: 555px;
  background-color: #ffffff;
  border-radius: 20px;
  margin-top: 62px;
  position: relative;
  box-shadow: 0px 4px 4px 0px #00000040;
  flex-direction: column;
  /* border: 3px solid purple; */
`;

export const ExampleImage = styled.div`
  width: 100%;
  height: 88%;
  display: flex;
  position: absolute;
  bottom: 0;
  opacity: 50%;
  background-image: url(/src/image/example.png);
  background-size: contain;
  background-position: center;
  border-top-style: solid;
  border-top-width: 3px;
  border-top-color: black;
`;

export const VoteTitle = styled.div`
  position: absolute;
  font-family: Roboto Mono;
  font-size: 30px;
  font-weight: 700;
  line-height: 57px;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 3%;
  display: flex;
  align-items: center;
  height: 4rem;
  width: 100%;
`;

export const VoteSubject = styled.div`
  position: absolute;
  justify-content: center;
  display: flex;
  width: 100%;
  height: 8rem;
  top: 5rem;
  white-space: pre-wrap;
  p {
    font-family: Roboto Mono;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: 0em;
    padding: 1rem;
    width: 92%;
    height: 70%;
    text-align: center;
    white-space: pre-wrap;
  }
`;

export const SignUp = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  width: 100%;
  justify-content: center;
  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Roboto Mono;
    font-size: 16px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 10px;
  }
  span {
    color: #2e74b5;
  }
`;

export const CheckBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  div {
    display: flex;
    align-items: center;
    position: relative;
  }
  input[type="radio"] {
    appearance: none;
    outline: none;
    width: 25px;
    height: 25px;
    border: 2px solid black;
    border-radius: 50%;
    margin-right: 1rem;
    cursor: pointer;
    position: absolute;
    top: 45px;
    left: 18px;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background-color: transparent;
    }
    &:checked::before {
      background-color: #2e74b5;
      width: 16px;
      height: 16px;
    }
  }
`;

export const CheckProperty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1rem;
  top: 210px;
  p {
    display: flex;
    position: relative;
    font-family: Roboto Mono;
    font-size: 20px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    padding: 1rem;
    height: 40px;
    width: 360px;
    margin-top: 5px;
    left: 18px;
    align-items: center;
    background-color: #ffffff;
    border-radius: 8px;
    border: 2px solid black;
  }
`;
