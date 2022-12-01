import "../Book/Book.scss";
import logo from "../../Assets/Images/logo-black.svg";
import bookImage from "../../Assets/Images/book-page-image.png";
import arrowRight from "../../Assets/Images/ArrowRight.svg";
import Progressbar from "../../Components/ProgressBar/Progressbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Book() {
  const nav = useNavigate();
  const [err, setErr] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      !e.target.company.value ||
      !e.target.industry.value ||
      !e.target.phone.value
    ) {
      setErr("--err");
    } else {
      setErr("");
      nav("/create-account");
    }
  };

  return (
    <div className="book-page">
      <Progressbar page="pagetwo" />
      <div className="primary-container">
        <div>
          <div>
            <img src={logo} alt="logo-black" />
          </div>
          <form className="book-form" onSubmit={(e) => handleFormSubmit(e)}>
            <div className="book-form__fields">
              <div className="book-header">
                Thanks, and how can our team contact you?
              </div>

              <div className="book-text">
                Before we can get your free month of bookkeeping started, we’ll
                need a few more details. Let us know the best phone number to
                reach you, and we’ll get in touch ASAP to get started.
              </div>

              <label className="book-form__label">COMPANY NAME </label>
              <input
                className={`book-form__input${err}`}
                type="text"
                name="company"
              />
              <label className="book-form__label">COMPANY INDUSTRY</label>
              <input
                className={`book-form__input${err}`}
                type="text"
                name="industry"
              />
              <label className="book-form__label">PHONE NUMBER </label>
              <input
                className={`book-form__input${err}`}
                type="text"
                name="phone"
                placeholder="+1 750 555-5555"
              />
            </div>
            <div className="book-image">
              <img src={bookImage} alt="book-image" className="image" />
            </div>
            <div className="book-btn-wrapper">
              <button className="book-btn" type="submit">
                <div className="book-btn__text">
                  NEXT
                  <img
                    className="book-btn__arrow"
                    src={arrowRight}
                    alt="arrow-right"
                  />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
