import React from "react";
import { StyledIcon, StyledIconWrapper } from "../icomoon";
import * as SC from "./welcome.style";
import { config } from "../icomoon/icon.config";

const Welcome = ({ data }) => {
  return (
    <>
      {data ? (
        <>
          <SC.StyledH1>{data.greeting}</SC.StyledH1>
          <StyledIconWrapper>
            <StyledIcon {...config.youtube} />
          </StyledIconWrapper>
          <SC.StyledName>{data.name}</SC.StyledName>
          <SC.StyledH3>{data.jobTitle}</SC.StyledH3>
          <SC.StyledH3>{data.sectionTitle}</SC.StyledH3>
          <SC.StyledDescription>{data.sectionDescription}</SC.StyledDescription>
        </>
      ) : (
        <div>Loading Welcome Section tomorrow !</div>
      )}
    </>
  );
};
export { Welcome };
