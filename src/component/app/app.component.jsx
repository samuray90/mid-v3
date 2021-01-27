import React, { useState, useEffect } from "react";
import { Contact } from "../contact";
import { urls } from "../../constants/urls";

import { Welcome } from "../welcome";

const App = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    (async () => {
      const response = await (await fetch(urls.data)).json();
      setData(response);
    })();
  }, []);

  return (
    <div>
      <Welcome data={data.welcome} />
      <Contact data={data.connect} />
    </div>
  );
};

export { App };
