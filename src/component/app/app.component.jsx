import React from "react";
import { Skills } from "../skills";
import { Welcome } from "../welcome";
import { OpenSource } from "../open-source";
import { Contact } from "../contact";

const App = () => {
  return (
    <div>
      <Welcome />
      <Contact />
      <Skills />
      <OpenSource />
    </div>
  );
};

export { App };
