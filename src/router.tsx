import { createBrowserRouter, Navigate } from "react-router-dom";
import Day1 from "./100/1/Day-1";
import Day2 from "./100/2/Day-2";
import Home from "./Home/Home";
import Main from "./Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "/day-1",
        element: <Day1 />,
        errorElement: <Navigate to={"/"} />,
      },
      {
        path: "/day-2",
        element: <Day2 />,
        errorElement: <Navigate to={"/"} />,
      },
    ],
  },
  { path: "/*", element: <Navigate to={"/"} /> },
]);
