import React, { useEffect, useRef } from "react";
import "./Counter.css";

const Counter = () => {
  useEffect(() => {

    let valueDisplays = document.querySelectorAll(".num");
    let interval = 5000;

    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 10;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  });

  return (
    <div className="counter-container">
    <div className="wrapper">
      <div className="container">
        <i className="fas fa-smile-beam"></i>
        <span className="num" data-val="50000">000</span>
        <span className="text">HAPPY CUSTOMERS AND COUNTING</span>
      </div>
  
      <div className="container">
        <i className="fas fa-car"></i>
        <span className="num" data-val="25000">000</span>
        <span className="text">CARS SERVICED EVERY MONTH</span>
      </div>
  
      <div className="container">
        <i className="fas fa-industry"></i>
        <span className="num" data-val="3500">000</span>
        <span className="text">EXCLUSIVE SHOWROOMS</span>
      </div>
    </div>
  
    <div className="button-container">
      <button className="btn">BOOK A SHOWROOM VISIT</button>
      <button className="btn">BOOK A SERVICE</button>
    </div>
  </div>
  );
};

export default Counter;