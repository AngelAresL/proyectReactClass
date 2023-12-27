import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PeoplePage from "./pages/PeoplePages";
import PersonPage from "./pages/PersonPages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PeoplePage />,
  },
  {
    path: "/personas/:personId",
    element: <PersonPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
