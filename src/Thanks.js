import "./styles.css";
import machine from "./illustration-thank-you.svg";
import { useState } from "react";

function Thanks({ isActive, number }) {
  return (
    <div className="card thanksCard">
      <div className="machine">
        <img src={machine} alt="machine" />
      </div>
      <div className="userChoice">You selected {number} out of 5</div>
      <div className="thanksHeader heading">Thank you!</div>
      <div className="thanksSub subheading">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </div>
    </div>
  );
}

export default Thanks;
