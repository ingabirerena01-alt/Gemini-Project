import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Page from "./App";
import "./index.css";
const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
