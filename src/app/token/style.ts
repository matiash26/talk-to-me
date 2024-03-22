import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #3c5cfd;
`;
export const Content = styled.section`
  background: #5773ff;
  padding: 6rem 3rem;
  border-radius: 1rem;
  box-shadow: 0px 1px 15px 2px #00000021;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  position: relative;
`;
export const Title = styled.h1`
  color: white;
  font-weight: 500;
`;
export const InputField = styled.input.attrs({
  placeholder: "Past your Token",
})`
  width: 100%;
  outline: none;
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #80808021;
  box-shadow: 0px 2px 4px 2px #00000026;
`;
export const Button = styled.button`
  border: none;
  cursor: pointer;
  font-weight: 600;
  align-self: center;
  padding: 0.6rem 1rem;
  border-radius: 0.3rem;
  background-color: white;
  box-shadow: 0px 2px 4px 2px #00000026;
  font-size: 0.8rem;
  color: #0000009c;
  &:active {
    background-color: #3c5cfd;
    color: white;
  }
`;
export const Label = styled.a`
  color: white;
  font-size: 0.8rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

export const Alert = styled.span`
  font-size: 0.8rem;
  text-align: center;
  background-color: #e73535ed;
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 0.2rem;
  align-self: center;
`;
