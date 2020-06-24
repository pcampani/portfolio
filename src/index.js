import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import App from "./App";
import reducer from './slices/postSlice';

const store = configureStore({
  reducer
});

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById("root")
);
