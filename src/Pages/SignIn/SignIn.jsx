import "./SignIn.scss";
import Header from "../../Components/Header/Header";
import pageImage from "../../Assets/Images/page1-img.png";

function SignIn() {
  return (
    <div className="main-wrapper">
      <Header />
      <div className="SignIn">
        <div className="SignIn__main-container">
          <div className="SignIn__primary-block">
            <div className="SignIn__form-block">
              <h1 className="SignIn__primary-text">3 Easy Steps</h1>
              <p className="SignIn__secondary-text">
                Is all you need to get started with America’s largest
                bookkeeping service.
              </p>
              <form className="SignIn__form">
                <input
                  className="SignIn__input"
                  name="name"
                  placeholder="Full Name"
                />
                <input
                  className="SignIn__input"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                <button className="SignIn__form-btn" type="submit">
                  Start a free trial
                </button>
              </form>
              <p className="SignIn__subtext">
                No credit card required. By clicking ‘Start a Free Trial’, I
                agree to Bench’s Terms & Privacy Policy.
              </p>
              <p className="SignIn__sign-link">
                Already have an account?{" "}
                <span className="SignIn__link">Log in here.</span>
              </p>
            </div>
          </div>
          <div>
            <img src={pageImage} alt="pageImage" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
