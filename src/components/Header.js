import React from 'react';
import './Header.css'; // Add custom CSS for styling

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul className="nav-list">
                    <li>For Realtors</li>
                    <li>For 3rd Parties</li>
                    <li>For Governance</li>
                    <li>For Customers</li>
                </ul>
            </nav>
            <div className="header-options">
                <button className="marketplace-btn">Marketplace</button>
                <button className="tokenomics-btn">Tokenomics</button>
                <button className="rewards-btn">Rewards</button>
                <button className="login-btn">Login</button>
            </div>
        </header>
    );
};

export default Header;
