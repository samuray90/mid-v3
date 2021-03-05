import styled from "styled-components";
import { Icon } from "../icomoon/icomoon.component";
export const StyledButton = styled.div`
  position: relative;
  display: flex;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => (size ? size : "148px")};
  height: ${({ size }) => (size ? size : "40px")};
  border: 0;
  background-color: ${({ color }) => (color ? color : "#1875f0")};

  color: white;
  margin: 20px 20px;

  & .icon__download {
    margin-right: 12px;
    background-color: white;
    width: 50px;
  }
`;
