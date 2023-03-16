import React from "react";
import classes from "./Day3.module.scss";

export const Day3: React.FC = () => {
  return (
    <div className={classes.pyramid}>
      <div className={classes.circle}>
        <div className={classes.sky}></div>
        <div className={classes.sun}></div>
        <div className={classes.left}></div>
        <div className={classes.right}></div>
        <div className={classes.shadow}></div>
        <div className={classes.ground}></div>
      </div>
    </div>
  );
};

export default Day3;
