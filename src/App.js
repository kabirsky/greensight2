import React, { useState } from "react";

import "./App.css";
import Search from "./components/Search";
import Vacancies from "./components/Vacancies";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  let [select_value, setSelectValue] = useState("");

  return (
    <div className="App">
      <div className="container">
        <h2 className="header-title">List of vacancies</h2>
        <Search select_value={select_value} setSelectValue={setSelectValue} />
        <Vacancies select_value={select_value} />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
