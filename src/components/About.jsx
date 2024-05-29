import React from 'react';
import "../styles/About.css";
import aboutbg from "../images/about-bg.png";
import kavlikart from "../images/kavlikart.png";
// import aboutbilona from "../images/aboutbilona.png"
const About = () => {
  return (
    <div>
    <div id='about'></div>
      <div className="about-main">
        <h1 className="about">About us</h1>
      </div>
      <div className="about-container">
      <div className="about-flex">
        <div className="about-image">
          {/* <div className="aboutbg"> */}
            <img src={aboutbg} alt="" srcset="" />
          {/* </div> */}
          <div className="kavlikart">
            <img src={kavlikart} alt="" srcset="" />
          </div>
        </div>
        <div className="about-lorem">
          <p className="pfirst">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          <p className="psec">Here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
          <p className="psec">here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,</p>
        </div>
        </div>
        

      </div>
      
    </div>
  );
}

export default About;
