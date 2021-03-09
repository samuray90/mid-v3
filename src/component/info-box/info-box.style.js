import styled from "styled-components";

import { Icon } from "../icomoon";

// style the container where we are going to have the header with the text header and the content plus the footer and the close-icon.

//

export const ContainerInfoBox = styled.div`
  background-color: #fff;
  margin-top: 1rem;
  position: relative;
  border-radius: 26px;
  box-shadow: 2px solid red(0, 23, 55, 24);

  &::after {
    content: "";
    width: 15px;
    height: 15px;
    position: absolute;
    transform: rotate(45deg);
  }
`;

export const BoxHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const BoxHeaderText = styled.div`
  flex-grow: 1;
  color: black;
`;

export const InfoBoxContent = styled.div`
  //add the lines/borders
`;

export const Paragraph = styled.p`
  color: #707070;
`;

export const CloseIcon = styled(Icon)`
  background-color: blueviolet;
`;
