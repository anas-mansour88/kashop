import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
);
