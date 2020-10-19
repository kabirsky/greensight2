import React, { useEffect, useRef, useState } from "react";
import parse from "html-react-parser";
import "../styles/Vacancy.css";

import no_image_available from "../img/no_image_available.svg";

function Vacancy(props) {
  let [company_logo, setCompanyLogo] = useState(null);
  let [vacancy, setVacancy] = useState("vacancy");
  let [description, setDescription] = useState("description");
  let [description__text, setDescriptionText] = useState("description__text");
  let [buttonValue, setButtonValue] = useState("more details");
  let vacancyRef = useRef(null);

  useEffect(() => {
    if (props.company_logo === null) {
      setCompanyLogo(no_image_available);
    } else {
      setCompanyLogo(props.company_logo);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (props.focusTarget === props.id) {
      window.scrollTo(0, vacancyRef.current.offsetTop);
    }
  });

  let handleImageErrored = () => {
    setCompanyLogo(no_image_available);
  };

  let handleButtonClick = () => {
    if (vacancy === "vacancy") {
      setVacancy("vacancy vacancy__opened");
      setDescription("description description__opened");
      setDescriptionText("description__text description__text__opened");
      setButtonValue("close");
    } else {
      setVacancy("vacancy");
      setDescription("description");
      setDescriptionText("description__text");
      setButtonValue("more details");
    }
  };

  return (
    <div className={vacancy} ref={vacancyRef}>
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
            {props.type}
          </p>
          <p className="info-text info-text__company">
            <span className="info-text__label">Company: </span>
            {props.company}
          </p>
          <p className="info-text info-text__web">
            <span className="info-text__label">Web: </span>
            <a className="info-text__link" href={props.url}>
              {props.url}
            </a>
          </p>
          <p className="info-text info-text__address">
            <span className="info-text__label">Address: </span>
            {props.type}
          </p>
        </div>
      </div>

      <div className={description}>
        <h3 className="description__header">{props.title}</h3>
        <div className={description__text}>{parse(props.description)}</div>
        <div className="description__btn-wrapper">
          <input
            className="description__btn btn"
            type="button"
            id="description__button"
            value={buttonValue}
            onClick={handleButtonClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Vacancy;
