import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { MuiThemeProvider } from "@material-ui/core";

import * as serviceWorker from "./serviceWorker";

import App from "./App";

import muiTheme from "./config/theme";
import configureStore from "./config/store";

ReactDOM.render(
  <MuiThemeProvider theme={muiTheme}>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
