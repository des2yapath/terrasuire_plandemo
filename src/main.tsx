import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import VivaDashboard from "@/pages/VivaDashboard";
import "@/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <VivaDashboard />
  </StrictMode>,
);
