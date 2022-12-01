import "./Book.scss";
import headerLogo from "../Assets/Images/bench-logo-vector.svg";

const Book = () => {
  return (
    <div className="book-page">
      <div className="header__logo-wrapper">
        <img className="header__logo" src={headerLogo} alt="company logo"></img>
      </div>
      <div className="greeting__container">
        <h2 className="greeting__title">
          Thanks PlaceHolder, How can our team contact you?
        </h2>
        <p className="greeting__text">
          Before we can get your free month of bookkeeping started, we’ll need a
          few more details. Let us know the best phone number to reach you, and
          we’ll get in touch ASAP to get started.
        </p>
      </div>
      <div className="progress-bar">
        <div className="progress-bar__step1"></div>
        <div className="progress-bar__step2"></div>
        <div className="progress-bar__step3"></div>
      </div>
      <div className="lower-wrapper">
        <form className="book-form">
          <div className="book-form__company-name">
            <label className="book-form__label">company name</label>
            <input
              className="book-form__company-name-input"
              type="text"
            ></input>
          </div>
          <div className="book-form__phone">
            <label className="book-form__label">phone number</label>
            <input
              className="book-form__phone-input"
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            ></input>
          </div>
          <div className="book-form__country">
            <label className="book-form__label">country</label>
            <select className="book-form__country-list">
              <option>United States</option>
              <option>Canada</option>
            </select>
          </div>
          <div className="book-form__timezone">
            <label className="book-form__label">time zone</label>
            <select className="book-form__timezone-list">
              <option>Pacific</option>
              <option>Moutain</option>
              <option>Central</option>
              <option>Eastern</option>
              <option>Atlantic</option>
              <option>Hawaii</option>
            </select>
          </div>
        </form>
        <div className="aside-image">
          <div className="image"><p>placeholder text</p></div>
        </div>
      </div>
    </div>
  );
};

export default Book;
