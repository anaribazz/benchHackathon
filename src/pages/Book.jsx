const Book = () => {
  return (
    <div className="book-page">
      <div className="header__logo-wrapper">
        <img
          className="header__logo"
          alt="company logo"
          src="../assets/images/bench-logo-vector.svg"
        ></img>
        <div className="greeting__container">
          <h2 className="greeting__title">
            Thanks PlaceHolder, and how can our team contact you?
          </h2>
          <p className="greeting__text">
            Before we can get your free month of bookkeeping started, we’ll need
            a few more details. Let us know the best phone number to reach you,
            and we’ll get in touch ASAP to get started.
          </p>
        </div>
        <form className="book-form">
          <div className="book-form__company-name">
            <label className="book-form__label">company name</label>
            <input
              className="book-form__company-name-input"
              type="text"
              placeholder="Enter your company name here..."
            ></input>
          </div>
          <div className="book-form__company-phone">
            <label className="book-form__label">phone number</label>
            <input
              className="book-form__company-phone-input"
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Book;
