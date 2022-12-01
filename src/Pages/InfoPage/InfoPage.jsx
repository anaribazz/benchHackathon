import "./InfoPage.scss";
import page1Image from "../../Assets/Images/Page1.png";

function InfoPage() {
  return (
    <div className="InfoPage">
      <div className="InfoPage__main">
        <div className="InfoPage__box-primary">
          <div className="InfoPage__text-box">
            <h1 className="InfoPage__box-header-text">3 Easy Steps</h1>
            <p className="InfoPage__box-subheader-text">
              Is all you need to get started with America's largest bookkeeping
              service
            </p>
          </div>
        </div>
        <div className="InfoPage__secondary-box">
          <div className="InfoPage__img-box">
            <img className="InfoPage__1stImage" src={page1Image} alt="page 1" />
          </div>
        </div>
      </div>
      <div className="InfoPage__third-block">
        <h1 className="InfoPage__third-block-text">
          When you sign up get instant forecast of how much your business could
          save
        </h1>
      </div>
    </div>
  );
}
export default InfoPage;
