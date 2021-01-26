import React, { useEffect, useState } from "react";
import { StyledIcon, StyledIconWrapper } from "../icomoon";
import * as SC from "./welcome.style";
import { config } from "../icomoon/icon.config";

const url = "http://localhost:4000/welcome";

const Welcome = () => {
  const [welcome, updateWelcome] = useState({});

  //the explination

  // const callBack = () => {
  //   (async () => {
  //     const response = await (await fetch(url)).json();
  //     updateWelcome(response);
  //   })();
  // };
  // const dependancyArray = [];
  // useEffect(callBack, dependancyArray);

  useEffect(() => {
    (async () => {
      const response = await (await fetch(url)).json();
      updateWelcome(response);
    })(); //IIFE immediately invoked function expression / type = anonymous async function
  }, []);

  return (
    <>
      <SC.StyledH1>Welcome</SC.StyledH1>
      <StyledIconWrapper>
        <StyledIcon {...config.youtube} />
      </StyledIconWrapper>
      <SC.StyledName>{welcome.name}</SC.StyledName>
      <SC.StyledH3>{welcome.jobTitle}</SC.StyledH3>
      <SC.StyledH3>{welcome.sectionTitle}</SC.StyledH3>
      <SC.StyledDescription>{welcome.sectionDescription}</SC.StyledDescription>
    </>
  );
};
export { Welcome };
