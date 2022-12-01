import "../Book/Book.scss";
import logo from "../../Assets/Images/logo-black.svg";
import bookImage from "../../Assets/Images/book-page-image.png";
import arrowRight from "../../Assets/Images/ArrowRight.svg";
import { Link } from "react-router-dom";
import Progressbar from "../../Components/ProgressBar/Progressbar";

export default function Book() {
  return (
    <div className="book-page">
      <Progressbar page="pagetwo" />
      <div className="primary-container">
        <div>
          <div>
            <img src={logo} alt="logo-black" />
          </div>
          <div className="book-header">
            Thanks, and how can our team contact you?
          </div>

          <div className="book-text">
            Before we can get your free month of bookkeeping started, we’ll need
            a few more details. Let us know the best phone number to reach you,
            and we’ll get in touch ASAP to get started.
          </div>

          <form className="book-form">
            <label className="book-form__label">COMPANY NAME </label>
            <input className="book-form__input" type="text" />
          </form>

          <form className="book-form">
            <label className="book-form__label">COMPANY INDUSTRY</label>
            <input className="book-form__input" type="text" />
          </form>

          <form className="book-form">
            <label className="book-form__label">PHONE NUMBER </label>
            <input
              className="book-form__input"
              type="text"
              placeholder="+1 750 555-5555"
            />
          </form>
        </div>

        <div className="book-image">
          <img src={bookImage} alt="book-image" className="image" />
        </div>
      </div>

      <div className="book-btn-wrapper">
        <div className="book-btn">
          <Link to="/create-account" className="book-btn__link">
            <div className="book-btn__text">
              NEXT
              <img
                className="book-btn__arrow"
                src={arrowRight}
                alt="arrow-right"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
