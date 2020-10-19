import React, { useState, useEffect } from "react";
import JobApi from "../modules/JobApi";

import getTestValues from "../test/getTestValues";

import "../styles/Vacancies.css";

function Vacancies(props) {
  let [vacanciesJSON, setVacanciesJSON] = useState([]);
  let [vacancies, setVacancies] = useState([]);
  let [end, setEnd] = useState(5);
  let select_value = props.select_value;

  /*Проставить true если надо посмотреть на функционал без API запросов*/
  let isTest = false;

  useEffect(() => {
    if (!isTest) {
      new JobApi().getJobs(setVacanciesJSON, setVacancies);
      console.log(vacanciesJSON);
      console.log(vacancies);
    } else {
      setVacancies(getTestValues());
      setEnd(1);
    }
    // eslint-disable-next-line
  }, []);

  let handleButtonClick = () => {
    setEnd(end + 5);
  };

  let visibleVacancies =
    select_value === ""
      ? vacancies.slice(0, end)
      : vacancies
          .filter((val) => {
            return val.props.type === select_value;
          })
          .slice(0, end);

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
