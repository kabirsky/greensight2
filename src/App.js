import React from "react";

import "./App.css";
import Search from "./components/Search";
import Vacancies from "./components/Vacancies";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h2 className="header">List of vacancies</h2>
        <Search />
        <Vacancies />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
