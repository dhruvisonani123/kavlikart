import React from "react";
import "../styles/contact.css";
import cow2 from "../images/cow2.png";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import printest from "../images/printest.png";
import Button from "./Button";
const Contactus = () => {
  return (
    <>
      <div className="contact-us">
        <div className="contact-heading">
          <h1>Contact Us</h1>
        </div>
        <div className="cow2-flex">
          <div className="cow2">
            <img src={cow2} alt="" srcset="" />
          </div>
          <div className="contact-form">
            <div className="form-flex">
              <div className="form-container">
                <form>
                  <div className="input-row">
                    <input
                      type="text"
                      className="input-box"
                      placeholder="your name"
                    />
                    <input
                      type="text"
                      className="input-box"
                      placeholder="Your Contact Number"
                    />
                  </div>
                  <div className="input-row">
                    <input
                      type="text"
                      className="input-box"
                      placeholder="Your Email"
                    />
                    <input
                      type="text"
                      className="input-box"
                      placeholder="Subject"
                    />
                  </div>

                  <textarea
                    type="text"
                    placeholder="Massage"
                    className="input-box5"
                  />
                  <div className="button-submit">
                  <Button text={"Submit"} />
                  </div>
                </form>
              </div>
              {/* <div className="address">
                <div className="address-p">
                  <p className="ad-p">
                    Keep away from people who try to belittle your ambitions
                    Small people always do that but the really great Friendly.
                  </p>
                <div className="detail">
                  <p>Contact: +919898989898</p>
                  <p> Email: email@website.com</p>
                  <div className="icons">
                  <img src={twitter} alt="" srcset="" />
                    <img src={facebook} alt="" srcset="" />
                    <img src={instagram} alt="" srcset="" />
                    <img src={printest} alt="" srcset="" />
                    </div>
                  
                </div>
                </div>
                
              </div> */}
              <div className="keep">
                <p>Keep away from people who try to belittle your ambitions Small people always do that but the really great Friendly.</p>
                <div className="keep-contact">

                <p>Contact: +919898989898 </p>
               <p> Email: email@website.com</p>
               </div>
               <div className="all-icon">
                <img src={twitter} alt="" srcset="" />
                <img src={facebook} alt="" srcset="" />
                <img src={instagram} alt="" srcset="" />
                <img src={printest} alt="" srcset="" />
 
               </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
