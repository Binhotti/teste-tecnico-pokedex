import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.text};
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
`;
export const Title = styled.h1`
  text-align: center;
  margin-bottom: 16px;
`;