import styled, { keyframes } from "styled-components";

const typeAnimation = keyframes`
    to {
        width: 20px;
    }
`;
export const typingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1rem;
  position: absolute;
  left: 1.3rem;
  bottom: 0.2rem;
`;
export const text = styled.h1`
  display: flex;
  font-size: 0.8rem;
  color: #00000057;
  padding-top: 0.3rem;
`;
export const dotAnimation = styled.h3`
  font-size: 24px;
  width: 1px;
  overflow: hidden;
  color: #00000057;
  display: flex;
  align-items: center;
  animation: ${typeAnimation} 1.3s ease-in-out infinite;
`;
