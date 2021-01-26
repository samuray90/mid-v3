import React, { useEffect, useState } from "react";
import { StyledColumn } from "../column/column.style";
import * as SC from "./welcome.style";

const Welcome = () => {
  const [welcome, updateWelcome] = useState({});

  useEffect(() => {
    fetch("http://localhost:4000/welcome")
      .then((result) => result.json())
      .then((result) => updateWelcome(result));
  }, []);
  return (
    <div>
      <SC.StyledH1>Welcome</SC.StyledH1>
      <StyledColumn height={40} />
      <SC.StyledName>{welcome.name}</SC.StyledName>
      <StyledColumn height={40} />
      <SC.StyledH3>Junior Web Developer</SC.StyledH3>
      <StyledColumn height={40} />
      <SC.StyledH3>About me</SC.StyledH3>
      <StyledColumn height={40} />
      <SC.StyledDescription>{welcome.sectionDescription}</SC.StyledDescription>
    </div>
  );
};
export { Welcome };
