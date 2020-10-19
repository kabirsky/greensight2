import React, { useState, useEffect } from "react";
import "../styles/Search.css";

function Search(props) {
  let select_value = props.select_value;
  let setSelectValue = props.setSelectValue;
  let [position_value, setPositionValue] = useState("");
  let [searchButton, setSearchButton] = useState("search-btn-wrapper");

  useEffect(() => {
    if (select_value === "" && position_value === "") {
      setSearchButton("search-btn-wrapper search-btn-wrapper__disabled");
    } else {
      setSearchButton("search-btn-wrapper");
    }
  }, [select_value, position_value]);

  let handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };

  let handlePositionChange = (event) => {
    setPositionValue(event.target.value);
  };

  let handleButtonClick = () => {
    setSelectValue("");
    setPositionValue("");
  };

  return (
    <div className="search">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="search-form">
          <label className="search-form__label label">Form</label>
          <select
            required
            className="search-form__select"
            value={select_value}
            onChange={handleSelectChange}
            onKeyPress={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
          >
            <option
              className="search-form__option placeholder"
              value=""
              hidden
              disabled
            >
              Not selected
            </option>
            <option className="search-form__option">Full Time</option>
            <option className="search-form__option">Half Time</option>
            <option className="search-form__option">Part Time</option>
          </select>
        </div>

        <div className="search-position">
          <label
            className="search-position__label label"
            htmlFor="search-position__text"
          >
            Position
          </label>
          <input
            className="search-position__text text"
            type="text"
            id="search-position__text"
            name="position"
            placeholder="Unspecified"
            value={position_value}
            onChange={handlePositionChange}
            onKeyPress={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
          />
        </div>

        <div className={searchButton} onClick={handleButtonClick}>
          <input
            className="search-btn btn"
            type="button"
            id="search-btn"
            value="Clear sorting"
          />
          <label className="search-btn__cross" htmlFor="search-btn"></label>
        </div>
      </form>
    </div>
  );
}

export default Search;
