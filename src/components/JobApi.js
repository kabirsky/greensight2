export default class JobApi {
  
    getJobs() {
      return fetch("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=frontend")
          .then((result) => {
            if (result.ok) {
              return result.json();
            }
            return  Promise.reject(result.status);
          })
          .catch((err) => {
            console.log('Vacancies loading error')
            return Promise.reject(err);
          });
    }
  
  }

