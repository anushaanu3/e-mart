import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./stores/Context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <CartProvider>
          <App />
        </CartProvider>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
