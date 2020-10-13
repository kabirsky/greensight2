import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import "../styles/Vacancy.css";

function Vacancy(props) {
  return (
    <div className="vacancy">
      <div className="info">
        <div
          className="info-img-wrapper"
          style={{
            backgroundImage: `url(${
              props.company_logo === null
                ? "../img/No_image_available.svg"
                : props.company_logo
            })`,
          }}
        ></div>
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

      <div className="description">
        <h3 className="description__header">{props.title}</h3>
        <div className="description__text">{parse(props.description)}</div>
      </div>
    </div>
  );
}

export default Vacancy;
