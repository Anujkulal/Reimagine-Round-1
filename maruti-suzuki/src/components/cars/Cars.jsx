import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import car1 from '../../assets/images/cars/car1.webp';
import car2 from '../../assets/images/cars/car2.avif';
import car3 from '../../assets/images/cars/car3.jpg';
import car4 from '../../assets/images/cars/car4.jpeg';
import car5 from '../../assets/images/cars/car5.jpeg';
import car6 from '../../assets/images/cars/car6.webp';
import car7 from '../../assets/images/cars/car7.jpg';
import './Cars.css';

gsap.registerPlugin(ScrollToPlugin);

const Cars = () => {

  useEffect(() => {
    
    document.addEventListener('DOMContentLoaded', () => {  //comment out this to turn on auto scrolling with line no. 60

      const scrollContainer = document.querySelector('.scroll-container');
      const scrollContent = document.querySelector('.scroll-content');
      const cars = document.querySelectorAll('.car');
      
      if (!scrollContainer || !scrollContent || cars.length === 0) {
          console.error('Required elements are missing or there are no cars.');
          return;
      }
      
      const carWidth = cars[0].offsetWidth + parseInt(getComputedStyle(cars[0]).marginLeft) + parseInt(getComputedStyle(cars[0]).marginRight);
      const totalWidth = carWidth * cars.length;
      
      let autoScroll;
      let direction = 1; // 1 for forward, -1 for backward
      
      function startAutoScroll() {
          const targetX = direction === 1 ? totalWidth - scrollContainer.offsetWidth : 0;
          
          autoScroll = gsap.to(scrollContainer, {
              scrollTo: { x: targetX },
              duration: 15, 
              ease: "linear",
              onComplete: () => {
                  direction *= -1; // Reverse the direction
                  startAutoScroll();
              }
          });
      }
      
      scrollContainer.addEventListener('mouseenter', () => {
          if (autoScroll) autoScroll.pause();
      });
      
      scrollContainer.addEventListener('mouseleave', () => {
          if (autoScroll) autoScroll.play();
      });
      
      startAutoScroll();

  }); //comment-out
  
  }, []);

  return (
    <div className="scroll-container">
      <div className="scroll-content">
        <div className="car">
          <img src={car1} alt="Car 1" />
          <div className="car-details">
            <p>Model: WAGON R</p>
            <p>Name: Maruti Suzuki Wagon R</p>
            <p>Amount: $8,000</p>
          </div>
        </div>
        <div className="car">
          <img src={car2} alt="Car 2" />
          <div className="car-details">
            <p>Model: BALENO</p>
            <p>Name: Maruti Suzuki Baleno</p>
            <p>Amount: $12,000</p>
          </div>
        </div>
        <div className="car">
          <img src={car3} alt="Car 3" />
          <div className="car-details">
            <p>Model: S-PRESSO</p>
            <p>Name: Maruti Suzuki S-Presso</p>
            <p>Amount: $7,500</p>
          </div>
        </div>
        <div className="car">
          <img src={car4} alt="Car 4" />
          <div className="car-details">
            <p>Model: FRONX</p>
            <p>Name: Maruti Suzuki Fronx</p>
            <p>Amount: $16,000</p>
          </div>
        </div>
        <div className="car">
          <img src={car5} alt="Car 5" />
          <div className="car-details">
            <p>Model: SWIFT</p>
            <p>Name: Maruti Suzuki Swift</p>
            <p>Amount: $10,000</p>
          </div>
        </div>
        <div className="car">
          <img src={car6} alt="Car 6" />
          <div className="car-details">
            <p>Model: IGNIS</p>
            <p>Name: Maruti Suzuki Ignis</p>
            <p>Amount: $9,000</p>
          </div>
        </div>
        <div className="car">
          <img src={car7} alt="Car 7" />
          <div className="car-details">
            <p>Model: BALENO</p>
            <p>Name: Maruti Suzuki Baleno</p>
            <p>Amount: $12,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
