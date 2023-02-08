import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ItemList from "./ItemList";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ItemList />
  </StrictMode>
);