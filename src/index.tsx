import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";

const root = document.getElementById("root");

if (root) {
  const container = createRoot(root);
  container.render(<App />);
}
