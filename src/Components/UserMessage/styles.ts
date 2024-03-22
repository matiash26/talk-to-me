import styled from "styled-components";
interface propsWho {
  who: string;
}
export const container = styled.li<propsWho>`
  list-style: none;
  display: flex;
  justify-content: ${(props) =>
    props.who === "me" ? "flex-end" : "flex-start"};
`;
export const msgContent = styled.div<propsWho>`
  max-width: 280px;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.who === "me" ? "row-reverse" : "row")};
  gap: 0.8rem;
`;
export const picture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-size: cover;
  user-select: none;
`;
export const message = styled.div<propsWho>`
  width: 220px;
  border-radius: 0.5rem;
  padding: 0.8rem;
  text-align: left;
  position: relative;
  font-size: 0.86rem;
  background-color: ${(props) => (props.who === "me" ? "#3c5cfd" : "#FFFFFD")};
  color: ${(props) => (props.who === "me" ? "#FFFFFD" : "black")};
  word-wrap: break-word;
`;
export const msgContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const userName = styled.span`
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
  font-weight: 500;
`;
