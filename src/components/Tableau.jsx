import React, { useEffect, useRef } from "react";

const { tableau } = window;

const Tableau = () => {
  const tableauView = useRef(null);
  const DASHBOARD_URL =
    "https://example-host.tableau.com/t/example-user/views/example";

  // Function to initialize tableau and add it to view
  // https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api.htm
  const initTableau = () => {
    new tableau.Viz(tableauView.current, DASHBOARD_URL);
  };

  useEffect(() => {
    initTableau();
  }, []);

  return <div ref={tableauView}></div>;
};

export default Tableau;
