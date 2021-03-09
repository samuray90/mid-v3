import React from "react";
import { config } from "../icomoon/icon.config";

import * as BX from "./info-box.style";
import {
  DownloadButton,
  StyledButtonText,
  StyledDownloadIcon,
} from "../welcome/welcome.style";

export const InfoBox = ({
  title,
  icon,
  description,
  link,
  close,
  socialList,
}) => {
  return (
    <BX.InfoBoxWrapper>
      <BX.CloseIcon>{config.cross1}</BX.CloseIcon>
      <BX.ContainerInfoBox>
        <BX.Title>{title}</BX.Title>
        <BX.BoxHeaderText>
          {description}
          <BX.Paragraph>
            <DownloadButton>
              <StyledDownloadIcon {...config.link2}>{link}</StyledDownloadIcon>
            </DownloadButton>
          </BX.Paragraph>
        </BX.BoxHeaderText>
      </BX.ContainerInfoBox>
    </BX.InfoBoxWrapper>
  );
};
