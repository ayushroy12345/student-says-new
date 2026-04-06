import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error(
    'Student Says: no element with id="root". Use Vite dev server (npm run dev), not opening index.html directly.',
  );
}

createRoot(rootEl).render(<App />);
