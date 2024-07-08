import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Accordion from "./components/accordion/index.tsx";
import RandomColor from "./components/random-color/index.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/accordion" element={<Accordion />} />
      <Route path="/random-color" element={<RandomColor />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
