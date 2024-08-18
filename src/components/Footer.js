import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <button>Government UIs</button>
                <button>Tokenizing RWAs</button>
                <button>Contact Us</button>
                <button>About Us</button>
            </div>
            <div className="subscription">
                <input type="email" placeholder="Your Email-ID Please" />
                <button>Click Here To Subscribe For Offerings</button>
            </div>
        </footer>
    );
};

export default Footer;
