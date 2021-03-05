import React from "react";
import IcoMoon from "react-icomoon";

const iconSet = require("../../asset/font/selection.json");

export const Icon = (props) => <IcoMoon {...{ ...props, iconSet }} />;
