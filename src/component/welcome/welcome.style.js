import styled from "styled-components";
import { Icon } from "../icomoon/icomoon.component";

export const StyledH1 = styled.h1`
  padding: 10px;
  height: 60px;
  background-color: #d52027;
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
  color: #fff;
`;

export const Cell = styled.div`
  grid-column: 1/-1;
  display: flex;
  justify-content: center;
`;

export const StyledH3 = styled.h3`
  font-size: 30px;
  display: flex;
  font-weight: 600;
  color: #707070;
  text-align: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const StyledName = styled.div`
  font-size: 45px;
  display: flex;
  font-weight: 600;
  color: #707070;
  text-align: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const StyledDescription = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  padding: 20px;
  margin: 10px;
  border-radius: 6px;
  font-size: 15px;
  color: #707070;
  font-weight: 600;
  line-height: 30px;
`;

export const StyledDownloadIcon = styled(Icon)`
  padding: 10px;
`;

export const StyledButtonText = styled.div`
  color: #fff;

  font-size: 15px;
`;

export const DownloadButton = styled.div`
  height: 40px;
  width: 175;
  border-radius: 25px;
  padding: 0 10px;
  background-color: #1875f0;
  display: flex;
  align-content: center;
`;
