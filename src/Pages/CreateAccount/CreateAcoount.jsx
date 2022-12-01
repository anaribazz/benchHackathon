import "../CreateAccount/CreateAccount.scss";
import logo from "../../Assets/Images/logo-black.svg";
import createImage from "../../Assets/Images/create-image.png";
import arrowRight from "../../Assets/Images/ArrowRight.svg";
import { Link } from "react-router-dom";

export default function CreateAccount() {
  return (
    <div>
      <div className="primary-container">
        <div>
          <div>
            <img src={logo} alt="logo-black" />
          </div>
          <div className="create-header">
            Almost done! Create your Bench account to access trial
          </div>

          <div className="book-text">
            Review your account details and create a password.
          </div>

          <form className="book-form">
            <label className="book-form__label">John</label>
            <input className="book-form__input" type="text" />
          </form>

          <form className="book-form">
            <label className="book-form__label">Doe</label>
            <input className="book-form__input" type="text" />
          </form>

          <form className="book-form">
            <label className="book-form__label">johndoe@gmail.com</label>
            <input className="book-form__input" type="text" />
          </form>

          <form className="book-form">
            <label className="book-form__label">PASSWORD</label>
            <input className="book-form__input" type="text" />
          </form>

          <div className="term-container">
            <p>
              By signing up you accept our
              <a className="create-term" href="">
                End User License Agreement and Terms of Service.
              </a>
            </p>
          </div>
        </div>

        <div className="create-image">
          <img src={createImage} alt="book-image" />
        </div>
      </div>

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
  );
}
