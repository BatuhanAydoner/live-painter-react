import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { LivePainterProvider } from "./contex/LivePainterContext";

ReactDOM.render(
  <LivePainterProvider>
    <App />
  </LivePainterProvider>,
  document.getElementById("root")
);
