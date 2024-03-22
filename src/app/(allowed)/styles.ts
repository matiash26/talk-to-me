import styled from "styled-components";

export const main = styled.main`
  height: 100vh;
  max-width: 1280px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #80808021;
  border-radius: 1rem;
  box-shadow: 0px 1px 15px 2px #00000021;
`;
export const listMsg = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0.8rem 0.5rem;
  background-color: #eaf1f9;
  border-radius: 0 0 0.5rem 0.5rem;
  overflow-y: auto;
  position: relative;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #b1aaaa;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #ddd;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track:hover {
    background-color: #ddd;
  }
`;
export const chat = styled.input.attrs({ placeholder: "SEND MESSAGE" })`
  width: 100%;
  padding: 0.6rem 0.5rem;
  border-radius: 0.5rem;
  outline: none;
  border: 1px solid #00000036;
  &::placeholder {
    opacity: 0.5;
    font-size: 0.8rem;
    font-weight: 600;
  }
`;
export const chatContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.5rem 1rem;
`;
export const record = styled.button`
  padding: 0.3rem 0.8rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #3c5cfd;
  color: white;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  gap: 0.3rem;
  cursor: pointer;

  &:active {
    color: #3c5cfd;
    background-color: rgb(214, 212, 212);
  }
  > svg {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }
`;

export const userProfile = styled.section`
  padding: 0.8rem 0.5rem;
  display: flex;
  border-bottom: 1px solid #80808021;
  gap: 0.5rem;
`;
export const userPicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
export const userName = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  > p {
    font-size: 0.9rem;
    font-weight: 700;
    opacity: 0.7;
  }
  > span:nth-child(3) {
    font-size: 0.8rem;
    color: #64ce6a;
  }
  .dot {
    font-size: 5rem;
    position: absolute;
    left: -25px;
    top: -39px;
    color: #64ce6a;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Loading = styled.h1`
  text-align: center;
  color: black;
  opacity: 0.7;
`;
