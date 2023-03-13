import React from "react";
import { Outlet } from "react-router-dom";

export const Main: React.FC = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default Main;
