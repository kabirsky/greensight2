import React, { useState } from "react";
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

  let isError = false;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const [errorName, setErrorName] = useState("form-element form-name");
  const [errorEmail, setErrorEmail] = useState("form-element form-email");
  const [errorPhone, setErrorPhone] = useState("form-element form-phone");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };

  const handleKeyPress = (event) => {
    event.key === "Enter" && handleSubmit(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    isError = false;
    //Проверка ФИО
    if (name === "" || name.match(/^[a-z а-яё ,.'-]+$/i) === null) {
      isError = true;
      setErrorName("form-element form-name form-element__error");
    } else {
      setErrorName("form-element form-name");
    }

    //Проверка емейла
    if (email === "" || email.match(/[^@]+@[^.]+\..+/i) === null) {
      isError = true;
      setErrorEmail("form-element form-email form-element__error");
    } else {
      setErrorEmail("form-element form-email");
    }

    //Проверка телефона
    if (phone === "" || phone.includes("_")) {
      isError = true;
      setErrorPhone("form-element form-phone form-element__error");
    } else {
      setErrorPhone("form-element form-phone");
    }

    if (!isError) {
      alert(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nComment: ${comment}`
      );
    }
  };

  return (
    <footer className="footer">
      <h2 className="footer-title">Leave a request</h2>
      <div className="contacts">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-wrapper">
            <div key="name" className={errorName}>
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
                value={name}
                onChange={handleChangeName}
                onKeyPress={handleKeyPress}
              />
            </div>

            <div key="email" className={errorEmail}>
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
                value={email}
                onChange={handleChangeEmail}
                onKeyPress={handleKeyPress}
              />
            </div>

            <div key="phone" className={errorPhone}>
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
                value={phone}
                onChange={handleChangePhone}
                onKeyPress={handleKeyPress}
              />
            </div>

            <div key="comment" className="form-element form-comment">
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
                value={comment}
                onChange={handleChangeComment}
                onKeyPress={handleKeyPress}
              />
            </div>

            <div className="form-btn-wrapper">
              <input
                className="form-btn btn"
                type="submit"
                id="form-btn"
                value="Send"
                onKeyPress={handleKeyPress}
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
          <p className="contacts-box__phone">
            <a href="tel:+7-499-391-66-69">+7 499 391-66-69</a>
          </p>
          <p className="contacts-box__email">
            <a href="mailto:mail@greensight.ru">mail@greensight.ru</a>
          </p>
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
