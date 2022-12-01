import "../CreateAccount/CreateAccount.scss";
import logo from "../../Assets/Images/logo-black.svg";
import createImage from "../../Assets/Images/create-image.png";
import arrowRight from "../../Assets/Images/ArrowRight.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateAccount() {
  const nav = useNavigate();
  const [err, setErr] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      !e.target.fname.value ||
      !e.target.lname.value ||
      !e.target.email.value ||
      !e.target.password.value
    ) {
      setErr("--err");
    } else {
      setErr("");
      nav("/complete");
    }
  };
  return (
    <div>
      <div className="primary-container">
        <div>
          <div>
            <img src={logo} alt="logo-black" />
          </div>
          <form
            className="create-acc-form"
            onSubmit={(e) => handleFormSubmit(e)}
          >
            <div className="create-acc-form__fields">
              <div className="create-header">
                Almost done! Create your Bench account to access trial
              </div>

              <div className="book-text">
                Review your account details and create a password.
              </div>
              <label className="create-acc-form__label">FIRST NAME</label>
              <input
                className={`create-acc-form__input${err}`}
                type="text"
                name="fname"
              />
              <label className="create-acc-form__label">LAST NAME</label>
              <input
                className={`create-acc-form__input${err}`}
                type="text"
                name="lname"
              />
              <label className="create-acc-form__label">EMAIL</label>
              <input
                className={`create-acc-form__input${err}`}
                type="text"
                name="email"
              />
              <label className="create-acc-form__label">PASSWORD</label>
              <input
                className={`create-acc-form__input${err}`}
                type="text"
                name="password"
              />
            </div>
            <div className="create-image">
              <img src={createImage} alt="book-image" />
            </div>
            <div className="term-container">
              <p>
                By signing up you accept our
                <a className="create-term" href="">
                  End User License Agreement and Terms of Service.
                </a>
              </p>
            </div>
            <div className="create-btn">
              <button className="create-btn__text" type="submit">
                NEXT
                <img
                  className="create-btn__arrow"
                  src={arrowRight}
                  alt="arrow-right"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
