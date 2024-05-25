import React from "react";
import "../styles/factor.css";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";
import card4 from "../images/card4.png";
import aboutb1 from "../images/aboutb1.png";
import bilona from "../images/bilona.png"
const Factor = () => {
  return (
    <>

      <div className="trust-factore">
      
        <h1 className="factor-h1">Trust Factor</h1>

        <div className="card-factor">
          <div className="card-flex">
            <div className="card-quality">
              <div className="card-bg">
                
                  <img src={card1} alt="" srcset=""  className="zoom-in"/>
                
                <div className="card1-content"></div>
              </div>
              <div className="best-quality">
                <p className="bestp">BEST QUALITY</p>
                <p className="qualityp">Lorem Ipsum which looks reasonable</p>
                <div className="quality-border"></div>
              </div>
            </div>
            <div className="nutrint">
            <div className="card-quality">
              <div className="card-bg">
                
                  <img src={card2} alt="" srcset="" />
                
                <div className="card1-content"></div>
              </div>
              <div className="best-quality">
                <p className="bestp">NUTRIENT RICH</p>
                <p className="qualityp">Lorem Ipsum which looks reasonable</p>
                <div className="quality-border"></div>
              </div>
            </div>
            </div>
            <div className="boost">
            <div className="card-quality">
              <div className="card-bg">
                
                  <img src={card3} alt="" srcset="" />
                
                <div className="card1-content"></div>
              </div>
              <div className="best-quality">
                <p className="bestp">BOOSTS DIGESTION</p>
                <p className="qualityp">Lorem Ipsum which looks reasonable</p>
                <div className="quality-border"></div>
              </div>
            </div>
            </div>
            <div className="preserved">
            <div className="card-quality">
              <div className="card-bg">
                
                  <img src={card4} alt="" srcset="" />
                
                <div className="card1-content"></div>
              </div>
              <div className="best-quality">
                <p className="bestp">PRESERVATIVE FREE</p>
                <p className="qualityp">Lorem Ipsum which looks reasonable</p>
                <div className="quality-border"></div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      
        
    </>
  );
};

export default Factor;
