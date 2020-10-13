import React from "react";
import "../styles//Vacancy.css";

function TestVacancy(props) {
  

  return (
    <div className="vacancy">
      <div className="info">
        <div className="info-img-wrapper">
          {/* <img
            className="info-img"
            alt="logo"
            src="https://www.soloprotect.com/uk/data/general_images/sp_uk_logo_bolton_final01_png-05.png"
          /> */}
        </div>
        <div className="info-text-wrapper">
          <p className="info-text info-text__form"><span className="info-text__label">Form: </span>Full time</p>
          <p className="info-text info-text__company"><span className="info-text__label">Company: </span>SoloProtect</p>
          <p className="info-text info-text__web"><span className="info-text__label">Web: </span><a className="info-text__link" href="https://www.soloprotect.com/us/">https://www.soloprotect.com/us/</a></p>
          <p className="info-text info-text__address"><span className="info-text__label">Address: </span>United Kingdom</p>
        </div>
      </div>

      <div className="description">
        <h3 className="description__header">.Net Software Developer (GIS experience)</h3>
        <p className="description__text"></p>
      </div>
    </div>
  );
}

export default TestVacancy;
