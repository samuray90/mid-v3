import React, { useState } from "react";
import { StyledIcon, StyledIconWrapper } from "../icomoon";
import * as SC from "./contact.style";
import { config } from "../icomoon/icon.config";
import { StyledIconMedia } from "../icomoon/icomoon.style";
import { StyledPic } from "../icomoon/icomoon.style";

const Contact = ({ data }) => {
  // const [selected, setSelected] = useState([]);

  // const handleClick = (e) => {
  //   const test = data.socialList?.socialList.filter(
  //     (el) => el.icon === e.target
  //   );
  //   test[0].icon === selected[0]?.icon ? setSelected([]) : setSelected(test);
  // };

  // const changeMe = document.querySelector(StyledIconMedia).addEventListener('click

  // };

  // const handleClose = () => {
  //   setSelected([]);
  // };

  // const conditionalInfoBox = () => {
  //   if (selected.length) {
  //     return (
  //       <InfoBox
  //         selected={selected[0]}
  //         handleClose={handleClose}
  //         cross={config.IconCross}
  //         link={config.link}
  //       />
  //     );
  //   }
  // };
  return (
    <>
      {data ? (
        <>
          <SC.StyledH1>{data.sectionTitle}</SC.StyledH1>
          <StyledIconWrapper>
            <StyledIcon />
          </StyledIconWrapper>
          <StyledPic />

          {Object.keys(config).map((icon, index, id) => {
            return <StyledIconMedia icon={icon} size={30} color={"white"} />;
          })}
        </>
      ) : (
        <div>Loading meet me section..</div>
      )}
    </>
  );
};
export { Contact };
