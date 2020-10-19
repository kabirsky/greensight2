import React, { useState, useEffect } from "react";
import JobApi from "../modules/JobApi";

import getTestValues from "../test/getTestValues";

import "../styles/Vacancies.css";

function Vacancies(props) {
  let [vacanciesJSON, setVacanciesJSON] = useState([]);
  let [vacancies, setVacancies] = useState([]);
  let [end, setEnd] = useState(5);
  let [targetY, setTargetY] = useState(0);
  let select_value = props.select_value;
  let visibleVacancies =
    select_value === ""
      ? vacancies.slice(0, end)
      : vacancies
          .filter((val) => {
            return val.props.type === select_value;
          })
          .slice(0, end);

  /*Проставить true если надо посмотреть на функционал без API запросов*/
  let isTest = false;

  useEffect(() => {
    if (!isTest) {
      new JobApi().getJobs(setVacanciesJSON, setVacancies);
    } else {
      setVacancies(getTestValues());
    }
    // eslint-disable-next-line
  }, []);

  let handleButtonClick = () => {
    let y = window.scrollY;
    setTargetY(y);
    setEnd(end + 5);

    window.onscroll = () => window.scrollTo(0, y); //отключаем скролл во избежание прыжков
  };

  useEffect(() => {
    window.onscroll = null; //включаем скролл обратно после рендера
    window.scrollTo(0, targetY); //Фикс для мобильных браузеров
  }, [targetY]);

  return (
    <div className="vacancies">
      {visibleVacancies}
      <div className="vacancies__more-btn-wrapper">
        <input
          className="vacancies__more-btn btn"
          type="button"
          id="vacancies__more-btn"
          value="More"
          onClick={handleButtonClick}
          style={
            visibleVacancies.length >= vacancies.length ||
            visibleVacancies.length === 0
              ? { display: "none" }
              : {}
          }
        />
      </div>
    </div>
  );
}

export default Vacancies;
