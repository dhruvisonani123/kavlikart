import React from "react";
import "../styles/Aboutghee.css";
import bilona from "../images/bilona.png";
import knowabout from "../images/know-ab.png";
import aboutb1 from "../images/aboutb1.png";
import img from "../images/img.png";
const Aboutghee = () => {
  return (
    <>
      <div className="About-container-main">
        <div className="bilona">
          <div className="bilona-flex">
            <div className="know-bilona">
             
                <p className="know-p-container">Know about Bilona Ghee</p>
                <p className="bilona-p-container">
                  Bilona ghee, an ancient Indian traditional clarified butter,
                  is considered superior far its unique production method. Made
                  by churning curd from Gir cours milk, it preserves essential
                  nutrients and rich Flavors. Its purity ensures it's free from
                  harmful chemicals and additives. Bilona ghee offers a
                  delightful nutty aroma and enhances the taste of dishes.
                  Opting far high-quality bilona ghee ensures the best
                  nutritional value and supports sustainable farming practices.
                </p>
            
            </div>
            <div className="about-bilona">
              <img src={knowabout} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Aboutghee;
