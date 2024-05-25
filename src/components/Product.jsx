import React, { useState } from "react";
import "../styles/product.css";
import eye from "../images/eye.png";
import ghee from "../images/bilona-ghee.png";
import Button from "./Button";
import Modal from "./Modal";
const Product = () => {
  const [ismodalopen,setIsOpen]=useState(false);

  const togglemodal=()=>{
setIsOpen(!ismodalopen);
  }
  return (
    <>
      <div className="products">
        <h1 className="product">Products</h1>
      </div>
    

<div className="gried-head">
<div className="gried-container">

      
        <div className="product-width">
          <div className="product-wid">
            <img src={eye} alt="" srcset="" onClick={()=> setIsOpen(true)} />
          </div>
            {ismodalopen && <Modal onclose={()=> setIsOpen(false)}/>}
          <div className="bottol-main">
            <img src={ghee} alt="" srcset="" />
            <p className="bilona-ghee">Bilona Ghee</p>
            <Button text={"Buy Now"}/>
          </div>
        </div>
      



     
        <div className="product-width">
          <div className="product-wid">
            <img src={eye} alt="" srcset=""  />
          </div>
          <div className="bottol-main">
            <img src={ghee} alt="" srcset="" />
            <p className="bilona-ghee">Bilona Ghee</p>
            <Button text={"Buy Now"}/>


          </div>
        </div>
     



  
        <div className="product-width">
          <div className="product-wid">
            <img src={eye} alt="" srcset="" />
          </div>
          <div className="bottol-main">
            <img src={ghee} alt="" srcset="" />
            <p className="bilona-ghee">Bilona Ghee</p>
            <Button text={"Buy Now"}/>


          </div>
        </div>
     



     
        <div className="product-width">
          <div className="product-wid">
            <img src={eye} alt="" srcset="" />
          </div>
          <div className="bottol-main">
            <img src={ghee} alt="" srcset="" />
            <p className="bilona-ghee">Bilona Ghee</p>
            <Button text={"Buy Now"}/>


          </div>
        </div>
      


      
        <div className="product-width">
          <div className="product-wid">
            <img src={eye} alt="" srcset="" />
          </div>
          <div className="bottol-main">
            <img src={ghee} alt="" srcset="" />
            <p className="bilona-ghee">Bilona Ghee</p>
            <Button text={"Buy Now"}/>


          </div>
        </div>
   


     
        <div className="product-width">
          <div className="product-wid">
            <img src={eye} alt="" srcset="" />
          </div>
          <div className="bottol-main">
            <img src={ghee} alt="" srcset="" />
            <p className="bilona-ghee">Bilona Ghee</p>
            <Button text={"Buy Now"}/>


          </div>
        </div>
     
      </div>
</div>

      
    </>
  );
};

export default Product;
