import React from "react";

import * as BX from "./info-box.style";

export const InfoBox = ({ title, icon, description, link, close }) => {
  return (
    <BX.ContainerInfoBox>
      <BX.BoxHeaderText>
        <BX.CloseIcon>
          <BX.InfoBoxContent>
            <BX.Paragraph></BX.Paragraph>
          </BX.InfoBoxContent>
        </BX.CloseIcon>
        {title}
      </BX.BoxHeaderText>
      {description}
    </BX.ContainerInfoBox>
  );
};
