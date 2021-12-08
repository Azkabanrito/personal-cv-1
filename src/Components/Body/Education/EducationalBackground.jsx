import React from "react";
import "./educationalBackground.css";

function EducationalBackground() {
  return (
    <div className="educationSection">
      <h4>Education</h4>
      <div className="educationSummary">
        <div className="educationRow">
          <div className="yearContainer">
            <p>2021</p>
          </div>
          <div className="courseContainer">
            <p>Full-stack developer</p>
          </div>
          <div className="schoolContainer">
            <p>Bafuto Institute Of Management And Information Technology</p>
          </div>
        </div>
        <div className="educationRow">
          <div className="yearContainer">
            <p>2020</p>
          </div>
          <div className="courseContainer">
            <p>Web design</p>
          </div>
          <div className="schoolContainer">
            <p>Colab training institute</p>
          </div>
        </div>
        <div className="educationRow">
          <div className="yearContainer">
            <p>2020</p>
          </div>
          <div className="courseContainer">
            <p>National youth service corps</p>
          </div>
          <div className="schoolContainer">
            <p>Kaduna state secteriate kakuri</p>
          </div>
        </div>
        <div className="educationRow">
          <div className="yearContainer">
            <p>2019</p>
          </div>
          <div className="courseContainer">
            <p>Bsc in Accounting</p>
          </div>
          <div className="schoolContainer">
            <p>Olabisi Onabanjo University</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationalBackground;
