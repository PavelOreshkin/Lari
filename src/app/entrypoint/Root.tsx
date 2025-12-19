import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { setupGlobalErrorHandlers } from "@/shared/lib/error/setupGlobalHandlers.ts";
import App from "./App.tsx";

import "reset-css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "../styles/global.css";

setupGlobalErrorHandlers();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
