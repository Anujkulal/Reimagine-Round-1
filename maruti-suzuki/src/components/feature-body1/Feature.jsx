import React, { useEffect, useRef } from "react";
import fImg1 from '../../assets/images/feature/1.webp';
import fImg2 from '../../assets/images/feature/2.webp';
import fImg3 from '../../assets/images/feature/3.webp';
import fImg4 from '../../assets/images/feature/4.webp';
import fImg5 from '../../assets/images/feature/5.webp';
import fImg6 from '../../assets/images/feature/6.webp';
import fImg7 from '../../assets/images/feature/7.webp';

import "./Feature.css";

const Feature = () => {
    useEffect(() => {});

    return (
        <section className="feature-hero">
        <div className="wrap-images">
          <div className="row-images">
            <div className="feature-image-container">
              <img src={fImg1} alt=""/>
              <div className="feature-image-content">
                <h3>MORE FROM US</h3>
                <p>DRIVING SCHOOLS TO INSURANCE</p>
              </div>
            </div>
            <div className="feature-image-container">
              <img src={fImg2} alt=""/>
              <div className="feature-image-content">
                <h3>CHANNELS</h3>
                <p>BUY OR SELL</p>
              </div>
            </div>
            <div className="feature-image-container">
              <img src={fImg3} alt=""/>
              <div className="feature-image-content">
                <h3>CORPORATE</h3>
                <p>FIND OUT WHAT DRIVES THE COMPANY</p>
              </div>
            </div>
            <div className="feature-image-container">
              <img src={fImg4} alt=""/>
              <div className="feature-image-content">
                <h3>SCROLL,SELECT & ORDER</h3>
                <p>ENHANCE YOUR CAR</p>
              </div>
            </div>
            <div className="feature-image-container">
              <img src={fImg5} alt=""/>
              <div className="feature-image-content">
                <h3>FEEL THE JOY</h3>
                <p>NAVIGATE TO NEAREST PETROL STATION</p>
              </div>
            </div>
            <div className="feature-image-container">
              <img src={fImg6} alt=""/>
              <div className="feature-image-content">
                <h3>LOOK AFTER YOUR CAR</h3>
              </div>
            </div>
            <div className="feature-image-container">
              <img src={fImg7} alt=""/>
              <div className="feature-image-content">
                <h3>MARUTI SUZUKI DRIVING SCHOOL</h3>
              </div>
            </div>
          </div>
          <div className="row-images">
            <div className="feature-image-container">
              <img src={fImg1} alt=""/>
              <div className="feature-image-content">
                <h3>MORE FROM US</h3>
                <p>DRIVING SCHOOLS TO INSURANCE</p>
              </div>
            </div>
            <div className="feature-image-container">
              <img src={fImg2} alt=""/>
              <div className="feature-image-content">
                <h3>CHANNELS</h3>
                <p>BUY OR SELL</p>
              </div>
            </div>
            <div className="feature-image-container">
              <img src={fImg3} alt=""/>
              <div className="feature-image-content">
                <h3>CORPORATE</h3>
                <p>FIND OUT WHAT DRIVES THE COMPANY</p>
              </div>
            </div>
            <div className="feature-image-container">
              <img src={fImg4} alt=""/>
              <div className="feature-image-content">
                <h3>SCROLL,SELECT & ORDER</h3>
                <p>ENHANCE YOUR CAR</p>
              </div>
            </div>
            <div className="feature-image-container">
              <img src={fImg5} alt=""/>
              <div className="feature-image-content">
                <h3>FEEL THE JOY</h3>
                <p>NAVIGATE TO NEAREST PETROL STATION</p>
              </div>
            </div>
            <div className="feature-image-container">
              <img src={fImg6} alt=""/>
              <div className="feature-image-content">
                <h3>LOOK AFTER YOUR CAR</h3>
              </div>
            </div>
            <div className="feature-image-container">
              <img src={fImg7} alt=""/>
              <div className="feature-image-content">
                <h3>MARUTI SUZUKI DRIVING SCHOOL</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="feature-wrap-content">
          <h1 className="feature-main-title">We make your car reliable and <strong><br/>fuel-efficient</strong></h1>
          <p className="description-hero">Get your Maruti Suzuki ready for the road and start saving from day one.</p>
          <a className="btn-primary" href="#">Know more</a>
        </div>
      </section>
    );
};

export default Feature;