import React, { useState } from "react";
import { StyledIcon, StyledIconWrapper } from "../icomoon";
import * as SC from "./contact.style";
import { config } from "../icomoon/icon.config";
import { StyledIconMedia } from "../icomoon/icomoon.style";
import { StyledPic } from "../icomoon/icomoon.style";
import { newColor } from "../useful/useful.component";

const Contact = ({ data }) => {
  const [color, setColor] = useState();

  const handleClick = () => {
    setColor(newColor.color);
    console.log(newColor);
  };

  return (
    <>
      {data ? (
        <>
          <SC.StyledH1>{data.sectionTitle}</SC.StyledH1>
          <StyledIconWrapper>
            <StyledIcon
              {...config.youtube}
              onClick={handleClick}
              backgroundColor={color}
            />
          </StyledIconWrapper>
          <StyledPic />

          {Object.keys(config).map((icon, index) => {
            return (
              <StyledIconMedia
                onClick={handleClick}
                backgroundColor={color}
                key={index}
                icon={icon}
                size={30}
                color={"white"}
              />
            );
          })}
        </>
      ) : (
        <div>Loading meet me section..</div>
      )}
    </>
  );
};
export { Contact };
