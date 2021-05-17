import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CatalogoProvider } from "./contexts/CatalogoContext";

ReactDOM.render(
  <React.StrictMode>
    <CatalogoProvider>
      <App />
    </CatalogoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
