import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { links } from "./links";

export const Main: React.FC = () => {
  return (
    <main>
      <Outlet context={links} />
    </main>
  );
};

export default Main;
