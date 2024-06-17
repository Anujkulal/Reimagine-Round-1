
import React, { useEffect } from 'react';
import './Footer.css';
import googleimg from '../../assets/images/google-play-store-logo.png';
import appleimg from '../../assets/images/Download_on_the_App_Store_Badge.png'

const Footer = () => {
    useEffect(() => {
        const upArrow = document.querySelector('.up-arrow');

        // if (upArrow) {
            upArrow.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        // }

        // Cleanup event listener on component unmount
        // return () => {
        //     if (upArrow) {
        //         upArrow.removeEventListener('click', () => {
        //             window.scrollTo({
        //                 top: 0,
        //                 behavior: 'smooth'
        //             });
        //         });
        //     }
        // };
    }, []);

    return (
        <footer>
            <section className="footer-container">
                <div className="footer-background">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div> 

                <div className="footer-contents">
                    <div className="reach-us-col">
                        <h3>REACH US</h3>
                        <a href="#" className="btn">LOCATE A DEALER</a>
                        <a href="#" className="btn">BOOK SHOWROOM VISIT</a>
                    </div>

                    <section className="about-section">
                        <div className="corporate-col column1">
                            <h4 className="text-left">CORPORATE</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Investors</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Media</a></li>
                            </ul>
                        </div>

                        <div className="sales-col column1">
                            <h4 className="text-left">SALES</h4>
                            <ul>
                                <li><a href="#">MARUTI SUZUKI ARENA</a></li>
                                <li><a href="#">Nexa</a></li>
                                <li><a href="#">True Value</a></li>
                                <li><a href="#">Commercial</a></li>
                            </ul>
                        </div>

                        <div className="more-col column1">
                            <h4>MORE FROM US</h4>
                            <div className="col1">
                                <ul>
                                    <li><a href="#">Maruti Suzuki Driving School</a></li>
                                    <li><a href="#">Maruti Suzuki Smart Finance</a></li>
                                    <li><a href="#">Maruti Suzuki Insurance Broking</a></li>
                                    <li><a href="#">Maruti Suzuki Rewards</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#">Maruti Suzuki Genuine Accessories</a></li>
                                    <li><a href="#">Maruti Suzuki Genuine Parts</a></li>
                                    <li><a href="#">Maruti Suzuki Leasing</a></li>
                                    <li><a href="#">Institutional Customers</a></li>
                                    <li><a href="#">Maruti Suzuki Subscribe</a></li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="more-info">
                        <p className="contact">1800 102 1800 &nbsp; &nbsp; &nbsp; contact@maruti.co.in</p>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <h3>Download App</h3>
                        <div className="app-stores">
                            <a href="#"><img src={googleimg} alt="Google Play" /></a>
                            <a href="#"><img src={appleimg} alt="App Store" /></a>
                        </div>
                    </section>

                    <section className="disclaimer">
                        <p>
                            *Car images shown are of top variant and for illustration purposes only. Accessories and features may not be part of standard equipment.<br />
                            *The content and information available on this website is limited to the sales and services offered by Maruti Suzuki India Limited in the jurisdiction of India only.<br />
                            *Prices/Schemes prevailing at the time of invoice /bill shall be applicable.<br />
                            *Caution: Beware of Fake Promotions or Offers<br />
                            Please do not believe or engage with any promotional messages (SMS) or Web-link which ask you to click on a link and fill in your details to win a Maruti Suzuki car. These SMS or Web-link based offers are fake, and Maruti Suzuki India Limited bears no
                            liability or responsibility whatsoever for any such communication which is fraudulent or misleading in nature.
                        </p>
                    </section>

                    <section className="bottom-footer">
                        <p className="copyright">&copy; Maruti Suzuki India Limited</p>
                        <p>Terms of Use</p>
                        <p>Data Provider Consent Policy</p>
                        <p>Privacy Policy</p>
                        <p>Sitemap</p>
                        <div className="up-arrow">
                            <i className="fas fa-arrow-up"></i>
                        </div>
                    </section>
                </div>
            </section>
        </footer>
    );
};

export default Footer;

