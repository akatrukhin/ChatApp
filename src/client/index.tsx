import React from "react";
import jss from "jss";
import preset from "jss-preset-default";
import { render } from "react-dom";
import { App } from "./components/app";
import { chatEntities } from "./entities";
import api from "./lib/api";

// Sets up JSS styling
jss.setup(preset());

render(<App chatEntities={chatEntities} />, document.getElementById("root"));
