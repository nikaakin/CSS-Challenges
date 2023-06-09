import React from "react";
import classes from "./Home.module.scss";

interface props {
  isON?: boolean;
}

export const BulbHead: React.FC<props> = ({ isON = false }) => {
  return (
    <React.Fragment>
      {" "}
      <div className={`${isON ? classes.glow : ""}`} />
      <svg
        fill={isON ? "#ff8" : "#8c8f99"}
        className={classes.bulbHead}
        xmlns="http://www.w3.org/2000/svg"
        width="76px"
        height="94px"
        viewBox="0 0 76 94"
      >
        <path d="M76,37.037 C76,59.939 55.6428571,75.427 55.6428571,93.5 L20.3571429,93.5 C20.3571429,75.427 0,59.9335 0,37.037 C0,13.1505 18.9891429,0 37.9782857,0 C56.9891429,0 76,13.167 76,37.037 L76,37.037 Z"></path>
      </svg>
    </React.Fragment>
  );
};

export default BulbHead;
