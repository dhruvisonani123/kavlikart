import React from 'react'
import "../styles/Button.css"
import vector from "../images/vector.png"
const Button = ({text}) => {
  return (

    <>
        {/* <button class="button">Click Me</button> */}
<div className="button-container">
<button class="button-with-image" >{text}</button>
</div>

    </>
  )
}

export default Button