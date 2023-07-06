import React from "react";
import "./popular.css";
import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";

const Popular = () => {
  return (
    <div className="section container popular">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Popular Destination</h2>
            <p>
              From pristine nature to attractive tourist areas, Let's have a
              wonderful experience together
            </p>
          </div>

          <div className="iconsDiv flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
