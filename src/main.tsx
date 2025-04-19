import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="text-stone-950 bg-stone-100">
      <App />
    </div>
  </StrictMode>
);
