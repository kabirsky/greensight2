import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import "../styles//Vacancy.css";
import getTestValues from "./getTestValues";

import no_image_available from "../img/no_image_available.svg";

function TestVacancy() {
  let values = getTestValues();
  let [company_logo, setCompanyLogo] = useState(null);
  let [description, setDescription] = useState("description");
  let [description__text, setDescriptionText] = useState("description__text");
  let [buttonValue, setButtonValue] = useState("more details");

  useEffect(() => {
    if (values.company_logo === null) {
      setCompanyLogo(no_image_available);
    } else {
      setCompanyLogo(values.company_logo);
    }
  }, [values.company_logo]);

  let handleImageErrored = () => {
    setCompanyLogo(no_image_available);
  };

  let handleButtonClick = () => {
    if (description__text === "description__text") {
      setDescription("description description__opened");
      setDescriptionText("description__text description__text__opened");
      setButtonValue("close");
    } else {
      setDescription("description");
      setDescriptionText("description__text");
      setButtonValue("more details");
    }
  };

  return (
    <div className="vacancy">
      <div className="info">
        <div className="info-img-wrapper">
          <img
            className="info-img"
            alt="logo"
            src={company_logo}
            onError={handleImageErrored}
          />
        </div>
        <div className="info-text-wrapper">
          <p className="info-text info-text__form">
            <span className="info-text__label">Form: </span>
            {values.type}
          </p>
          <p className="info-text info-text__company">
            <span className="info-text__label">Company: </span>
            {values.company}
          </p>
          <p className="info-text info-text__web">
            <span className="info-text__label">Web: </span>
            <a className="info-text__link" href={values.url}>
              {values.url}
            </a>
          </p>
          <p className="info-text info-text__address">
            <span className="info-text__label">Address: </span>
            {values.type}
          </p>
        </div>
      </div>

      <div className={description}>
        <h3 className="description__header">{values.title}</h3>
        <div className={description__text}>{parse(values.description)}</div>
        <div className="description__btn">
          <input
            className="description__button btn"
            type="button"
            id="description-btn btn"
            value={buttonValue}
            onClick={handleButtonClick}
          />
        </div>
      </div>
    </div>
  );
}

export default TestVacancy;
