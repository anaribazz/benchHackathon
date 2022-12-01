import "./Complete.scss";
import headerLogo from "../../Assets/Images/bench-logo-vector.svg";

const Complete = () => {
  return (
    <div className="complete-page">
      <div className="progress-bar">
        <div className="progress-bar__step1"></div>
        <div className="progress-bar__step2"></div>
        <div className="progress-bar__step3"></div>
      </div>
      <div className="complete-page--left">
        <div className="header__logo-wrapper">
          <img
            className="header__logo"
            src={headerLogo}
            alt="company logo"
          ></img>
        </div>
        <div className="greeting__container">
          <h2 className="greeting__title">Great! You're all done</h2>
          <p className="greeting__text">
            In the mean time, if you have business specific checking, savings,
            or credit cards we need to set those up. We’ll use these connections
            to complete your free month of bookkeeping.
          </p>
        </div>
        <div className="prompts-container">
          <p className="prompt">We never store your bank account credentials</p>
          <p className="prompt">
            we encrypt our data with the same level of security as online
            banking
          </p>
          <p className="prompt">
            You will have to ability to disconnect accounts at anytime
          </p>
        </div>
      </div>
      <div className="complete-page--right"></div>
      <div className="buttons-wrapper">
        <button className="cta-dashboard-button">dashboard</button>
        <button className="cta-chat-button">ready for a chat</button>
        <button className="cta-link-button">
          link business account
          {/* <img className="arrow-icon" alt="arrow" src="/"></img> */}
        </button>
      </div>
    </div>
  );
};

export default Complete;
