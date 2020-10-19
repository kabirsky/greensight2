import React from "react";
import MaskedInput from "react-text-mask";
import "../styles/Footer.css";

function Footer() {
  const mask = [
    "+",
    "7",
    "(",
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    ")",
    " ",
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    "-",
    /[0-9]/,
    /[0-9]/,
    "-",
    /[0-9]/,
    /[0-9]/,
  ];

  let handleKeyPress = (event) => {
    event.key === "Enter" && event.preventDefault();
  };
  let handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <footer className="footer">
      <h2 className="footer-title">Leave a request</h2>
      <div className="contacts">
        <form className="form">
          <div className="form-wrapper">
            <div className="form-element form-name">
              <label
                className="form-name__label label"
                htmlFor="form-name__text"
              >
                Your name
              </label>
              <input
                className="form-name__text text"
                type="text"
                id="form-name__text"
                name="name"
                placeholder="Please introduce yourself"
                onKeyPress={handleKeyPress}
                onSubmit={handleSubmit}
              />
            </div>

            <div className="form-element form-email">
              <label
                className="form-email__label label"
                htmlFor="form-email__text"
              >
                Email
              </label>
              <input
                className="form-email__text text"
                type="text"
                id="form-email__text"
                name="email"
                placeholder="ivanov@mail.ru"
                onKeyPress={handleKeyPress}
                onSubmit={handleSubmit}
              />
            </div>

            <div className="form-element form-phone">
              <label
                className="form-phone__label label"
                htmlFor="form-phone__text"
              >
                Phone number
              </label>
              <MaskedInput
                className="form-phone__text text"
                type="text"
                id="form-phone__text"
                name="phone"
                mask={mask}
                placeholder="+7(999)123-45-78"
                onKeyPress={handleKeyPress}
                onSubmit={handleSubmit}
              />
            </div>

            <div className="form-element form-comment">
              <label
                className="form-comment__label label"
                htmlFor="form-comment__text"
              >
                Comment
              </label>
              <input
                className="form-comment__text text"
                type="text"
                id="form-comment__text"
                name="comment"
                placeholder="Message text"
                onKeyPress={handleKeyPress}
                onSubmit={handleSubmit}
              />
            </div>

            <div className="form-btn-wrapper">
              <input
                className="form-btn btn"
                type="button"
                id="form-btn"
                value="Send"
              />
              <div className="consent-wrapper">
                <p className="consent">
                  By clicking "Send" you confirm your consent to the{" "}
                  <span>processing of personal data</span>
                </p>
              </div>
            </div>
          </div>
        </form>
        <div className="contacts-box">
          <p className="contacts-box__advice">
            We will advise you and help you start a new project
          </p>
          <p className="contacts-box__phone">+7 499 391-66-69</p>
          <p className="contacts-box__email">mail@greensight.ru</p>
          <p className="contacts-box__address">
            {[
              "Moscow, Zelenograd, Central Ave.,",
              <br />,
              "dg. 305, 3rd floor",
            ]}
          </p>
          <p className="contacts-box__navigation">
            <input
              className="link-nav btn"
              type="button"
              id="link-nav"
              value="How to get there?"
            />
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
