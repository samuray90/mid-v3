import React from "react";
import { StyledIcon, StyledIconWrapper } from "../icomoon";
import * as SC from "./contact.style";
import { config } from "../icomoon/icon.config";
import { StyledIconMedia } from "../icomoon/icomoon.style";
import { StyledPic } from "../icomoon/icomoon.style";

const Contact = ({ data }) => {
  return (
    <>
      {data ? (
        <>
          <SC.StyledH1>{data.sectionTitle}</SC.StyledH1>
          <StyledIconWrapper>
            <StyledIcon {...config.youtube} />
          </StyledIconWrapper>
          <StyledPic />

          {Object.keys(config).map((icon, index) => {
            return (
              <StyledIconMedia
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
