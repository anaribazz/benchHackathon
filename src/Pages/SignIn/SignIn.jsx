import "./SignIn.scss";
import InfoPage from "../InfoPage/InfoPage";
import avatar from '../../Assets/Images/ceoAvatar.png';

function SignIn() {
  return (
    <div className="SignIn">
        <InfoPage />
        <div className="SignIn__main-container">

      <div className="SignIn__primary-block">
        <div className="SignIn__form-block">
          <h1 className="SignIn__primary-text">
            Get started with America's largest bookkeeping service
          </h1>
          <p className="SignIn__secondary-text">
            A Bench financial expert will give you a call and ask a few
            questions to ensure that Bench is the best fit for your business.
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
            No credit card required. By clicking ‘Start a Free Trial’, I agree
            to Bench’s Terms & Privacy Policy.
          </p>
          <p className="SignIn__sign-link">
            Already have an account?{" "}
            <span className="SignIn__link">Log in here.</span>
          </p>
        </div>
      </div>
      <div className="SignIn__secondary-block">
        <h1 className="SignIn__secondary-title">What you get from the call</h1>
        <div className="SignIn__text-container">
          <h2 className="SignIn__header2">A personalized walkthrough with a small business expert</h2>
          <p className="SignIn__subheader2">
            We will get to know your business, show you how Bench works, and get
            you set up, quick.
          </p>
        </div>
        <div className="SignIn__secondary-block">
          <h1 className="SignIn__secondary-title">
            What you get from the call
          </h1>
          <div className="SignIn__text-container">
            <h2 className="SignIn__header2">
              A personalized walkthrough with a small business expert
            </h2>
            <p className="SignIn__subheader2">
              We will get to know your business, show you how Bench works, and
              get you set up, quick.
            </p>
          </div>
          <div className="SignIn__text-container">
            <h2 className="SignIn__header2">
              Full access to all features of the Bench platform
            </h2>
            <p className="SignIn__subheader2">
              You'll see first-hand how intuitive reports and real human
              bookkeepers take the stress out of tedious financial admin.
            </p>
          </div>
          <div className="SignIn__text-container">
            <h2 className="SignIn__header2">A free month of bookkeeping</h2>
            <p className="SignIn__subheader2">
              We will do one prior month of your bookkeeping in one business
              day, and prepare a set of financial statements for you to keep.
            </p>
          </div>
          <div className="SignIn__third-block">
            <p className="SignIn__dummy">line</p>
            <p className="SignIn__third-block-text">
              "Bench helped me replace QuickBooks, and save about 6 hours per
              month of horrible accounting work, which is priceless."
            </p>
            <img className="SignIn__avatar" src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;
