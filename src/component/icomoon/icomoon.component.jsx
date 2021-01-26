import React from "react";
import IcoMoon from "react-icomoon";

const iconSet = require("../../asset/font/selection.json");

const Icon = (props) => <IcoMoon {...{ ...props, iconSet }} />;

export { Icon };
