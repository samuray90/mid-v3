import React, { useEffect, useState } from "react";
import { StyledIcon, StyledIconWrapper } from "../icomoon";
import * as SC from "./contact.style";
import { config } from "../icomoon/icon.config";
import { StyledIconMedia } from "../icomoon/icomoon.style";
import { StyledPic } from "../icomoon/icomoon.style";
import { InfoBox } from "../info-box";

const Contact = ({ data }) => {
  const [selectat, modificaSelectat] = useState(null);
  useEffect(() => {
    console.log("useEfect", selectat);
  }, [selectat]);
  // whenever selectat changes we get console.log('....)
  // it starts off by being null

  // make use of useState by taking selected and another element which is modifing selected
  const afiseaza = (id) => {
    console.log(data.socialList[id]);
    return modificaSelectat(data.socialList[id]);
  };

  // set modificaSelectat value [efect]

  // make a constant who takes the id of each element and brings modificaSelectat calling data.socialList with every [id]
  const inchide = () => modificaSelectat(null);

  //here you bring inchide by setting it's result to null
  return (
    <>
      {data ? (
        <>
          <SC.StyledH1>{data.sectionTitle}</SC.StyledH1>
          <StyledIconWrapper>
            <StyledIcon />
          </StyledIconWrapper>
          <StyledPic />

          {selectat && <InfoBox close={inchide} {...selectat} />}

          {Object.keys(config).map((icon, id) => {
            return (
              <StyledIconMedia
                // styledIconMedia use Object.keys method and call my (config) which is another component ant hen maps through it using icon and id and returns the icon with it's size color and the id
                onClick={() => afiseaza(icon)}
                // bring onClik to show your icon .
                icon={icon}
                size={30}
                color={"white"}
                id={id}
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
