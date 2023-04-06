import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {TamaguiProvider} from "@tamagui/web";
import config from "../tamagui.config";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TamaguiProvider config={config}>
      <App />
    </TamaguiProvider>
  </React.StrictMode>,
);
