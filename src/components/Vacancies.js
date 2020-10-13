import React, { useState, useEffect } from "react";
import Vacancy from "./Vacancy";
import TestVacancy from "../test/TestVacancy";
import JobApi from "./JobApi";

import "../styles/Vacancies.css";

function Vacancies() {
  let [vacanciesJSON, setVacanciesJSON] = useState([]);
  let [vacancies, setVacancies] = useState([]);
  let [end, setEnd] = useState(5);

  // useEffect(() => {
  //   if (vacanciesJSON === null) {
  //     new JobApi().getJobs().then((data) => {
  //       setVacanciesJSON([...data]);
  //       console.log(vacanciesJSON);
  //       let temp = [];
  //       for (let i = 0; i < data[0].length; i++) {
  //         temp.push(
  //           <Vacancy
  //             key={i}
  //             company={data[0][i].company}
  //             company_logo={data[0][i].company_logo}
  //             type={data[0][i].type}
  //             url={data[0][i].url}
  //             location={data[0][i].location}
  //             title={data[0][i].title}
  //             description={data[0][i].description}
  //           />
  //         );
  //       }
  //       setVacancies(temp);
  //       console.log(vacancies);
  //     });
  //   }
  // }, []);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=frontend"
      );
      const jobs = await response.json();
      console.log(jobs);
      setVacanciesJSON([...jobs]);
      let temp = [];
      for (let i = 0; i < jobs.length; i++) {
        temp.push(
          <Vacancy
            key={i}
            company={jobs[i].company}
            company_logo={jobs[i].company_logo}
            type={jobs[i].type}
            url={jobs[i].url}
            location={jobs[i].location}
            title={jobs[i].title}
            description={jobs[i].description}
          />
        );
      }
      setVacancies(temp);
    };
    fetchJobs();
  }, []);

  console.log(vacanciesJSON);
  console.log(vacancies);

  return (
    <div className="vacancies">
      {/* <TestVacancy /> */}
      {vacancies.slice(0, end)}
      <div className="more-button"></div>
    </div>
  );
}

export default Vacancies;
