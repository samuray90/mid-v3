import React from "react";
import * as SS from "./contact.style";

const Contact = () => {
  return (
    <div>
      <SS.StyledContact>
        <SS.StyledH3>Come with me if you wanna' live</SS.StyledH3>
        <ul>
          <SS.StyledLi>skype</SS.StyledLi>
          <SS.StyledLi>facebook</SS.StyledLi>
          <SS.StyledLi>stackoverflow</SS.StyledLi>
          <SS.StyledLi>instagram</SS.StyledLi>
        </ul>
      </SS.StyledContact>
    </div>
  );
};

export { Contact };
