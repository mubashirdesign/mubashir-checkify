// Global app controller
// IMPORT THE CSS FILE into the main app JS or else the CSS file wont generate when npm build is run
import "../sass/main.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from 'redux-thunk';

import App from "./components/App";
import reducers from "./reducers";

//Redux dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Create app level store with reduxThunk in order for action creators to be able to call APIs
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
