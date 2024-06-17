
import React, { useEffect } from 'react';
import './Header.css';
import logo2 from '../../assets/images/logo2.png';
import marutilogo from '../../assets/images/maruti-logo.png';

const Header = () => {
    useEffect(() => {
        const navBtns = document.querySelectorAll('.nav-btn');
        navBtns.forEach(button => {
            const text = button.textContent;
            button.innerHTML = '';

            for (let char of text) {
                const span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char;
                button.appendChild(span);
            }
            const spans = button.querySelectorAll('span');

            button.addEventListener('mouseenter', () => {
                spans.forEach((span, index) => {
                    setTimeout(() => {
                        span.classList.add('hover');
                    }, index * 50);
                });
            });

            button.addEventListener('mouseleave', () => {
                spans.forEach((span, index) => {
                    setTimeout(() => {
                        span.classList.remove('hover');
                    }, index * 50);
                });
            });
        });
    }, []);

    return (
        <header>
            <nav className="navbar">
                <div className="left-logo">
                    <a href=""><img src={marutilogo} alt="logo" className="logo" /></a>
                </div>
                <div className="mid-navbar">
                    <ul>
                        <li><a href="#" className="nav-btn">Home</a></li>
                        <li><a href="#" className="nav-btn">Corporate</a></li>
                        <li><a href="#" className="nav-btn">Sales</a></li>
                        <li><a href="#" className="nav-btn">Service</a></li>
                        <li><a href="#" className="nav-btn">More from us</a></li>
                        <li><a href="#" className="nav-btn">Important customer info</a></li>
                    </ul>
                </div>
                <div className="right-navbar">
                    <a href=""><img src={logo2} alt="Engage logo" className="logo2" /></a>
                    <a href=""><i className="fa-solid fa-user"></i></a>
                    <a href=""><i className="fa-solid fa-magnifying-glass"></i></a>
            </div>
        </nav>
    </header>
    )};
    
export default Header;