import styled from "styled-components";
import { Icon } from "./icomoon.component";
import image from "../../asset/image/poza1.jpg";
import { colors } from "../../constants/colors";

export const StyledIcon = styled(Icon)`
  background-color: ${colors.red};
  padding: 13px;
  border-radius: 50%;
`;

export const StyledIconWrapper = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledPic = styled.div`
  width: 250px;
  height: 250px;
  background-image: url(${image});
  margin: 0 auto;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  transform: rotate(-2.5deg);
  position: relative;
  border: 6px solid ${colors.yellow};
  margin-bottom: 40px;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const StyledIconMedia = styled(Icon)`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : colors.blue};
  padding: 13px;
  border-radius: 15px;
  margin: 5px;
  width: 24px;
  height: 24px;
`;
