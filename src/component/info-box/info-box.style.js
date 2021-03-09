import styled from "styled-components";

import { Icon } from "../icomoon";

// style the container where we are going to have the header with the text header and the content plus the footer and the close-icon.

//

export const InfoBoxWrapper = styled.div`
  grid-column: 1/-1;
  display: flex;
  align-items: center;
  position: absolute;
  padding-top: 70px;
  padding: 20px;
  margin-top: 6rem;
`;

export const ContainerInfoBox = styled.div`
  background-color: #fff;
  /* height: 100px; */
  margin-top: 2rem;
  position: relative;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.45);
  border-radius: 6px;

  &::after {
    content: "";
    width: 14px;
    height: 15px;
    position: absolute;
    clip-path: polygon(-6px -6px, 100% 0, 0 100%);
    transform: rotate(45deg);
    box-shadow: 0 0px 6px rgba(0, 0, 0, 0.45);
    background-color: #fff;
    bottom: 11.5rem;
  }
`;

export const Title = styled.div`
  color: #808080;
  font-size: 25px;
  padding: 20px;
  margin: 15px 35px;
  border-bottom: 2px solid grey;
`;

export const BoxHeaderText = styled.div`
  color: black;
  font-size: 22px;
  align-items: center;
  font-weight: 500;
  justify-content: center;
  align-content: center;
  color: #808080;
  text-transform: capitalize;
  padding-left: 10px;
  margin: 15px;
`;

export const Link = styled.div`
  height: 40px;
  grid-column: 1/-1;
  background-color: skyblue;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 5px;
  padding: 5px;
  color: #fff;
  border-radius: 15px;
`;

export const Paragraph = styled.p`
  color: #707070;
  /* line-height: 15px; */

  border-bottom: 2px solid grey;

  margin: 20px 20px;
`;

export const CloseIcon = styled(Icon)`
  background-color: blueviolet;
  width: 40px;
  height: 40px;
  color: black;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
`;
