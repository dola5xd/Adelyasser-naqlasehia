import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./style/style.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import "./i18n/i18n";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
