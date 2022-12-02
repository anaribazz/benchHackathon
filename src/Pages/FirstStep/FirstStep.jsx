import "./FirstStep.scss";
import benchLogo from "../../Assets/Images/bench-logo-vector.svg";
import page2 from "../../Assets/Images/page2.png";
import Progressbar from "../../Components/ProgressBar/Progressbar";
import arrowRight from "../../Assets/Images/ArrowRight.svg";
import { Link } from "react-router-dom";

function FirstStep() {
  return (
    <div className="FirstStep">
      <Progressbar page="pageone" />
      <div className="FirstStep__block">
        <div className="FirstStep__main-container">
          <div className="FirstStep__main-container-block">
            <img
              className="FirstStep__main-logo"
              src={benchLogo}
              alt="bench logo"
            />
            <h1 className="FirstStep__main-title">
              {" "}
              Tell us about your business
            </h1>
            <form className="FirstStep__container-form">
              <p className="FirstStep__title">Company Size</p>
              <label className="FirstStep__label">
                Select number of owners, employees and contractors
              </label>
              <select
                className="FirstStep__form-input"
                name="name"
                placeholder="Select"
              >
                <option className="FirstStep__option">Select</option>
                <option>1</option>
                <option>1-5</option>
                <optio>6-10</optio>
                <option>11-25</option>
                <option>25+</option>
                <option>I'm not sure</option>
              </select>
              <p className="FirstStep__title">Industry</p>
              <label className="FirstStep__label">
                Type of company industry
              </label>
              <select
                className="FirstStep__form-input"
                name="email"
                type="email"
                placeholder="Select"
              >
                {" "}
                <option>Select</option>
              </select>
              <p className="FirstStep__title">Monthly Revenue</p>
              <label className="FirstStep__label">
                Select avarage monthly revenue before deduction
              </label>
              <select
                className="FirstStep__form-input"
                name="email"
                placeholder="Select"
              >
                <option>Select</option>
                <option>$0 (Pre-revenue)</option>
                <option> $1-$1,000</option>
                <optio>$1,000-$10,000</optio>
                <option>$10,000-$100,000</option>
                <option>More than $100,000</option>
                <option>I'm not sure</option>
              </select>
              <p className="FirstStep__title">Last tax return</p>
              <label className="FirstStep__label">
                Select most recent business income tax filing
              </label>
              <select className="FirstStep__form-input" placeholder="Select">
                <option>Select</option>
                <option>Tax year 2021</option>
                <option>Tax year 2021</option>
                <optio>Tax year 2019 or prior</optio>
              </select>
            </form>
          </div>
        </div>
        <div className="FirstStep__secondary-container">
          <div>
            <img
              className="FirstStep__secondary-image"
              src={page2}
              alt="First Step main image"
            />
          </div>
        </div>
      </div>

      <Link to="/book" className="step-btn">
        <div className="step-btn__text" type="submit">
          NEXT
          <img className="step-btn__arrow" src={arrowRight} alt="arrow-right" />
        </div>
      </Link>
    </div>
  );
}

export default FirstStep;
