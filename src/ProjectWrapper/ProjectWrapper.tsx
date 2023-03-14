import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useOutletContext, useParams } from "react-router-dom";
import { LinksType, LinkType } from "../links";
import "./wrapper.scss";

export const ProjectWrapper: React.FC = () => {
  const [current, setCurrent] = useState<LinkType>({
    id: 0,
    name: "",
    link: "",
    description: "",
    element: <></>,
  });
  const [isBarOn, setIsBarOn] = useState(true);
  const [pageHeight, setPageHeight] = useState<number | null>(null);
  const { day } = useParams();
  const links = useOutletContext<LinksType>();
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cur = links.find(({ link }) => link === day);
    setCurrent(cur as LinkType);
    setTimeout(() => setPageHeight(pageRef.current?.scrollHeight || null), 0);
  }, [day]);

  return (
    <div className="wrapper" ref={pageRef}>
      <header className="header">
        <Link to={"/"}>
          <img src="/go-back.png" alt="go back to home" className="img" />
        </Link>

        <h1>CSS Challenges : {current.link}</h1>

        <div>
          <button
            className={`burger ${isBarOn && "change-burger"}`}
            onClick={() => setIsBarOn((s) => !s)}
          >
            <span className={`line ${isBarOn && "rotate-line"}`} />
          </button>
        </div>
      </header>
      <div className="content-wrapper">
        <div className="main">
          <div className="project-wrapper">{current.element}</div>
          <div>
            <h2 className="title">Project Description: </h2>
            <div className="description"> {current.description}</div>
          </div>
        </div>
        <div className={`${isBarOn && "bar-wrapper"}`}>
          <div
            className={`bar ${isBarOn && "opacity-1"}`}
            style={{ height: `${pageHeight && pageHeight + 20}px` }}
          >
            <span className="bar-line"></span>
            <ul className="bar-ul">
              {links.map(({ id, name, link, description }) => (
                <li className="bar-li" key={`proj-wrapper${link}`}>
                  <Link
                    tabIndex={isBarOn ? 0 : -1}
                    to={`/${link}`}
                    className="link"
                    onClick={() => setIsBarOn(false)}
                    style={{
                      backgroundColor: current.id === id ? "#F7C04A" : "",
                      cursor: current.id === id ? "not-allowed" : "",
                    }}
                  >
                    {name}
                    <span className="link-info">{description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectWrapper;
