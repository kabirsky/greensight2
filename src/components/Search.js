import React from "react";
import "../styles/Search.css";

function Search() {
  return (
    <div className="search">
      <form className="form">
        <div className="search-form">
          <label className="search-form__label label">Form</label>
          <select
            required
            className="search-form__select"
            onKeyPress={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <option
              className="search-form__option placeholder"
              value=""
              hidden
              disabled
              selected
            >
              Not selected
            </option>
            <option className="search-form__option">Full time</option>
            <option className="search-form__option">Half time</option>
            <option className="search-form__option">Part time</option>
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
            onKeyPress={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          />
        </div>

        <div className="search-btn">
          <input
            className="search-btn__button btn"
            type="button"
            id="search-btn btn"
            value="Clear sorting"
          />
          <label className="search-btn__cross" htmlFor="search-btn btn"></label>
        </div>
      </form>
    </div>
  );
}

export default Search;
