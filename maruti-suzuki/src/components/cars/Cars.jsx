import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './Cars.css';

gsap.registerPlugin(ScrollToPlugin);

const App = () => {
  const scrollContainerRef = useRef(null);
  const scrollContentRef = useRef(null);
  const autoScrollRef = useRef(null);
  let direction = useRef(1); // 1 for forward, -1 for backward

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const cars = scrollContentRef.current.querySelectorAll('.car');
    
    if (!scrollContainer || cars.length === 0) {
      console.error('Required elements are missing or there are no cars.');
      return;
    }
    
    const carWidth = cars[0].offsetWidth + parseInt(getComputedStyle(cars[0]).marginLeft) + parseInt(getComputedStyle(cars[0]).marginRight);
    const totalWidth = carWidth * cars.length;

    const startAutoScroll = () => {
      const targetX = direction.current === 1 ? totalWidth - scrollContainer.offsetWidth : 0;
      
      autoScrollRef.current = gsap.to(scrollContainer, {
        scrollTo: { x: targetX },
        duration: 15, 
        ease: "linear",
        onComplete: () => {
          direction.current *= -1; // Reverse the direction
          startAutoScroll();
        }
      });
    };

    startAutoScroll();

    const handleMouseEnter = () => {
      if (autoScrollRef.current) autoScrollRef.current.pause();
    };

    const handleMouseLeave = () => {
      if (autoScrollRef.current) autoScrollRef.current.play();
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="scroll-container" ref={scrollContainerRef}>
      <div className="scroll-content" ref={scrollContentRef}>
        <div className="car">
          <img src="images/car1.webp" alt="Car 1" />
          <div className="car-details">
            <p>Model: WAGON R</p>
            <p>Name: Maruti Suzuki Wagon R</p>
            <p>Amount: $8,000</p>
          </div>
        </div>
        <div className="car">
          <img src="images/car2.avif" alt="Car 2" />
          <div className="car-details">
            <p>Model: BALENO</p>
            <p>Name: Maruti Suzuki Baleno</p>
            <p>Amount: $12,000</p>
          </div>
        </div>
        <div className="car">
          <img src="images/car3.jpg" alt="Car 3" />
          <div className="car-details">
            <p>Model: S-PRESSO</p>
            <p>Name: Maruti Suzuki S-Presso</p>
            <p>Amount: $7,500</p>
          </div>
        </div>
        <div className="car">
          <img src="images/car4.jpeg" alt="Car 4" />
          <div className="car-details">
            <p>Model: FRONX</p>
            <p>Name: Maruti Suzuki Fronx</p>
            <p>Amount: $16,000</p>
          </div>
        </div>
        <div className="car">
          <img src="images/car5.jpeg" alt="Car 5" />
          <div className="car-details">
            <p>Model: SWIFT</p>
            <p>Name: Maruti Suzuki Swift</p>
            <p>Amount: $10,000</p>
          </div>
        </div>
        <div className="car">
          <img src="images/car6.webp" alt="Car 6" />
          <div className="car-details">
            <p>Model: IGNIS</p>
            <p>Name: Maruti Suzuki Ignis</p>
            <p>Amount: $9,000</p>
          </div>
        </div>
        <div className="car">
          <img src="images/car7.jpg" alt="Car 7" />
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

export default App;
