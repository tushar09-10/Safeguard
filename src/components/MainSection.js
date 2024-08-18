import React from 'react';
import './MainSection.css';

const MainSection = () => {
    return (
        <div className="main-section">
            <div className="create-account">
                <h2>Create Account</h2>
                <p>Welcome! Enter your details and start creating, collecting, and selling RWAs.</p>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <button type="submit">Looks Good, Let's Move On</button>
                </form>
                <div className="sign-in-options">
                    <button className="google-sign-in">Sign in with Google</button>
                    <button className="apple-sign-in">Sign in with Apple</button>
                </div>
            </div>
            <div className="developer-logos">
                <h3>Developers</h3>
                <div className="logos-grid">
                    <img src="https://www.constructionweekonline.com/cloud/2023/07/25/Dubai-property-market-GettyImages-1417041621.jpg" alt="Dubai Properties" />
                    <img src="https://www.arabianbusiness.com/cloud/2021/11/09/N2jhoadf-aldarhq-3.jpg" alt="Aldar" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMgd7Dw6jotXWTTWgkYPEmRDHwQ6XC9EWXBg&s" alt="Danube Properties" />
                    <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2021-08/19/full/1629385185-4523.jpg" alt="Emaar" />
                </div>
            </div>
        </div>
    );
};

export default MainSection;
