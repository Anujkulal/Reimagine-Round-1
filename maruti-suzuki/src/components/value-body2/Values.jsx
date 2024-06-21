import React, { useEffect, useRef } from "react";
import img1 from '../../assets/images/values/1.webp';
import img2 from '../../assets/images/values/2.webp';
import img3 from '../../assets/images/values/3.webp';
import img4 from '../../assets/images/values/4.webp';
import img5 from '../../assets/images/values/5.png';
import "./Values.css";

const Values = () => {
    useEffect(() => {});

    return (
        <div className="values-container">
        <h1 className="values-heading">OUR <span>VALUES</span></h1>
        <div className="values">
            <div className="value-item">
                <img src={img1} alt="Customer Obsession"/>
                <p>Customer Obsession</p>
            </div>
            <div className="value-item">
                <img src={img2} alt="Openness & Learning"/>
                <p>Openness & Learning</p>
            </div>
            <div className="value-item">
                <img src={img3} alt="Networking & Partnership"/>
                <p>Networking & Partnership</p>
            </div>
            <div className="value-item">
                <img src={img4} alt="Fast, Flexible First Mover"/>
                <p>Fast, Flexible First Mover</p>
            </div>
            <div className="value-item">
                <img src={img5} alt="Innovation & Creativity"/>
                <p>Innovation & Creativity</p>
            </div>
        </div>
        <div className="values-buttons">
            <button className="value-btn">WORK WITH US</button>
            <button className="value-btn">TRAIN WITH US</button>
        </div>
    </div>
    );
};

export default Values;