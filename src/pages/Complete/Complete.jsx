import "./Complete.scss";
import headerLogo from "../../Assets/Images/bench-logo-vector.svg";
import demoImg from "../../Assets/Images/Projection.png";
import Progressbar from "../../Components/ProgressBar/Progressbar";
import greetingImage from "../../Assets/Images/Slice.png";

const Complete = () => {
  return (
    <div className="complete-page">
      <Progressbar page="pagethree" />
      <div className="complete-page-main">
        <div className="complete-page--left">
          <div className="header__logo-wrapper">
            <img
              className="header__logo"
              src={headerLogo}
              alt="company logo"
            ></img>
          </div>
          <div className="greeting__container">
            <img
              className="greeting__image"
              alt="greeting image"
              src={greetingImage}
            />
          </div>
        </div>
        <div className="complete-page--right">
          <p className="value__statement">
            WOW! From our predictions, you could potentially save an average of
            <p className="number">$1,615.49</p>
            of tax reduction based on your company monthly revenue and size
          </p>
          <img
            className="complete-page-img"
            alt="demo graph"
            src={demoImg}
          ></img>
        </div>
      </div>
      <div className="buttons-wrapper">
        <button className="cta-dashboard-button">demo dashboard</button>
        <button className="cta-link-button">link business account</button>
      </div>
    </div>
  );
};

export default Complete;
