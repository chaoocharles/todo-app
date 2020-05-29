import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { getFirebase, ReactReduxFireabseProvider } from "react-redux-firebase";
import firebase from "./config/firebaseConfig";
import { createFirestoreInstace } from "redux-firestore";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase }))
);

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstace,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFireabseProvider {...rrfProps}>
        <App />
      </ReactReduxFireabseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
