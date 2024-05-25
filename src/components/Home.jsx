import React from "react";
import "../styles/Home.css";
import cow from "../images/cow.png";
import gheeimg from "../images/ghee.png";
import homelast from "../images/homelast.png";

const Home = () => {
  return (
    <>
      <div className="home-section">
        <div className="cow-flex">
          <div className="div-cow">
            <img src={cow} alt="cow" className="cow-display" />
          </div>
          <div className="experience">
            <div className="experice-flex">
              <div className="experice-magic">
                <div className="experice-p">
                  <p className="banner-h zoom-animation">
                    Experience the magic of Ghee in every bite.
                  </p>
                  <div className="experince-p2">
                    <p className="banner-p zoom-animation">
                      Here are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </p>
                  </div>
                </div>
              </div>
              <div className="ghee">
                <img src={gheeimg} alt="ghee" className="ghee-display" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home">
        <img src={homelast} alt="home last" />
      </div>
    </>
  );
};

export default Home;