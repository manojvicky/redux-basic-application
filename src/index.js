import React from "react";
import ReactDOM from "react-dom";
import Grandparent from "./Grandparent";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./childReducer";
import App from "./indexContainer";

const logger = store => next => action => {
  console.group(action.type);
  console.log("%c previsous state", "color: orange", store.getState());
  console.log("%c action", "color: green", action);
  next(action);
  console.log("%c next state", "color: orange", store.getState());
  console.groupEnd();
};

let store = createStore(reducer, applyMiddleware(logger));
store.dispatch({ type: "ChangeState" });
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
