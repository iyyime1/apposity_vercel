import React from 'react'
import "./Logosection.css";
import logobanner from "../../assets/logobanner.png";

const Logosection = () => {
  return (
    <div>
      <div className="textlogo">
        <div className="upperpart">
        <div className="headinglogo">
            <h2> Manage Your Society</h2>
            <h2> from your finger tips</h2>
            </div>
            <div className="textbutton">
                 <p>Get free access & evaluate.</p>
            <button>Click Here To Know More</button>
            </div>
            <div className="image">
                <img src= {logobanner} alt="" />
            </div>
      </div>
      <div className="lowersec">
    <div className="textlower">
          <h2>Take a giant leap towards a</h2>
      <h2>Smart Society!</h2>
    </div>
    <div className="button">
        <button>
            Setup Your Society
        </button>
    </div>
      </div>
      </div>
    </div>
  )
}

export default Logosection
