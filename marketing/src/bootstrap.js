import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// mount function to start the app
const mount = (el) => {
  const root = ReactDOM.createRoot(el);
  root.render(<App />);
};
// 1st situation
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

// 2nd situation
export { mount };
