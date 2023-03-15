import React, { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { LinksType } from "../links";
import BulbEnd from "./bulbEnd.svg";
import BulbHead from "./BulbHead";
import classes from "./Home.module.scss";

export const Home: React.FC = () => {
  const [isOn, setIsOn] = useState(false);
  const links = useOutletContext<LinksType>();

  return (
    <div className={classes.home}>
      <div className={classes.bulbWrapper}>
        <div className={classes.lamp}>
          <div className={classes.wire}></div>
          <div className={classes.bulb}>
            <img src={BulbEnd} alt="bulb end" className={classes.bulbEnd} />
            <BulbHead isON={isOn} />
          </div>
        </div>
        <div className={classes.lamp}>
          <div className={classes.wire}></div>
          <div className={classes.bulb}>
            <img src={BulbEnd} alt="bulb end" className={classes.bulbEnd} />
            <BulbHead isON={isOn} />
          </div>
        </div>
        <div className={classes.lamp}>
          <div className={classes.wire}></div>
          <div className={classes.bulb}>
            <img src={BulbEnd} alt="bulb end" className={classes.bulbEnd} />
            <BulbHead isON={isOn} />
          </div>
        </div>
      </div>

      <div className={classes.mainContent}>
        <div className={classes.leftSide}>
          <div className={classes.switch}>
            <div
              className={classes.screw}
              style={{
                top: "5%",
              }}
            ></div>
            <div className={classes.tileWrapper}>
              <div
                className={`${classes.switch__tile} ${
                  isOn
                    ? classes.onActive
                    : `${classes.inactiveBg} ${classes.rotateOn}`
                }`}
                style={{
                  borderTopRightRadius: "8%",
                  borderTopLeftRadius: "8%",
                }}
                onClick={() => setIsOn(true)}
              >
                ON
              </div>
              <div
                className={`${classes.switch__tile} ${
                  isOn ? classes.rotateOff : classes.offActive
                }`}
                style={{
                  borderBottomRightRadius: "8%",
                  borderBottomLeftRadius: "8%",
                }}
                onClick={() => setIsOn(false)}
              >
                OFF
              </div>
            </div>
            <div
              className={classes.screw}
              style={{
                bottom: "5%",
              }}
            ></div>
          </div>

          <div className={classes.infoWrapper}>
            <div className={classes.contactWrapper}>
              <h1>Contact info:</h1>
              <div className={classes.contact}>
                <a
                  className={classes.contactLink}
                  href="https://github.com/nikaakin?tab=repositories"
                >
                  <span className={classes.contactTitle}>
                    Visit my Github: nikaakin
                  </span>
                  <img src="/github.png" alt="Github link" />
                </a>
                <hr />
              </div>
              <div className={classes.contact}>
                <span
                  className={classes.contactTitle}
                  style={{ marginBlock: "3px", display: "block" }}
                >
                  Email: nikacuckiridze47@gmail.com
                </span>
                <hr />
                <a
                  className={classes.contactLink}
                  href="mailto:nikacuckiridze47@gmail.com"
                >
                  <span className={classes.contactTitle}>
                    Send Mail directly
                  </span>
                  <img src="/gmail.png" alt="Github link" />
                </a>
                <hr />
              </div>
              <div className={classes.contact}>
                <a
                  className={classes.contactLink}
                  href="https://www.linkedin.com/in/nika-cuckiridze-387063228/"
                >
                  <span className={classes.contactTitle}>
                    linkedIn profile{" "}
                  </span>
                  <img src="/linkedIn.png" alt="Github link" />
                </a>
                <hr />
              </div>
            </div>

            <div className={classes.source}>
              <h3>Sources of Challenges:</h3>
              <a
                href="https://100dayscss.com/"
                style={{ color: "white", fontWeight: "600" }}
              >
                100 Days of Css
              </a>
            </div>
          </div>
        </div>
        <div className={classes.rightSide}>
          <h1 className={classes.title}>List of Projects:</h1>
          <div className={classes.projects}>
            {links.map((link) => (
              <Link to={link.link} key={link.name} className={classes.link}>
                {link.name}
                <span className={classes.pop}>{link.description}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
