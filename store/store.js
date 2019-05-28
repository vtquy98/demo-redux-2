import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";

const cp =
  typeof window !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const makeStore = initialState => {
  return createStore(rootReducer, initialState, cp(applyMiddleware()));
  // createStore(tham so 1: reducer, tham so 2: initState, tham so 3: middleware)
};

export default makeStore;
