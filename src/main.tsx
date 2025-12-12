import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Nav from "./components/NavigationBar.tsx";
import Bio from "./components/Bio.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main>
      <Nav />
      <Bio />
    </main>
  </StrictMode>
);
