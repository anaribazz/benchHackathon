import "./Progressbar.scss";

const Progressbar = () => {
  return (
    <div className="progress-wrapper">
      <div className="progress-bar">
        <div className="progress-bar__step1"></div>
        <div className="progress-bar__step2"></div>
        <div className="progress-bar__step3"></div>
      </div>
    </div>
  );
};

export default Progressbar;
