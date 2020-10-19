import React from "react";
import Vacancy from "../components/Vacancy";

export default class JobApi {
  getJobs(setVacanciesJSON, setVacancies) {
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
            id={i}
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
  }
}
