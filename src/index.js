import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// redux Component that controls all of the apps state
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// A store is a state container which holds the application’s state. Redux can have only a single store in your application
import { store, persistor } from "./redux/store";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById("root")
);
