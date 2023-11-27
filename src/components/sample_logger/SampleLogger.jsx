import React from "react";

import log from "loglevel";

function SampleLogger() {
  const LOG_LEVEL = process.env.REACT_APP_LOG_LEVEL;
  log.setLevel(LOG_LEVEL);
  log.debug("LOG_LEVEL ===>", LOG_LEVEL);

  log.debug("log.debug");

  log.info("log.info");

  return <div>SampleLogger</div>;
}

export default SampleLogger;
