import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;