import React from "react";
import classes from "./Day-2.module.scss";

const Day2: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={classes.day2}>
      <button
        className={`${classes.wrapper} ${isOpen && classes.active}`}
        onClick={(e) => setIsOpen((s) => !s)}
      >
        <div className={`${classes.line} ${classes.first}`} />
        <div className={`${classes.line} ${classes.second}`} />
        <div className={`${classes.line} ${classes.third}`} />
      </button>
    </div>
  );
};

export default Day2;
