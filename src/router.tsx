import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./Home/Home";
import Main from "./Main";
import ProjectWrapper from "./ProjectWrapper/ProjectWrapper";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "/:day",
        element: <ProjectWrapper />,
        errorElement: <Navigate to={"/"} />,
      },
    ],
  },
  { path: "/*", element: <Navigate to={"/"} /> },
]);
