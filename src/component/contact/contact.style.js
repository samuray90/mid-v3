import styled from "styled-components";

export const StyledContact = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  position: relative;
  padding-top: 20px;
  padding: 4px;
  grid-gap: 10px;
  align-items: center;
  justify-content: center;
  border: 3px solid orchid;
  grid-column: 4/-4;
`;
