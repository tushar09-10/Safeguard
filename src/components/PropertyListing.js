import React from 'react';
import './PropertyListing.css';

const PropertyListings = () => {
    return (
        <div className="property-listings">
            <h2>Property Listings</h2>
            <div className="listing-cards">
                <div className="listing-card">
                    <h3>Stable Income</h3>
                    <p>Low risk</p>
                    <p>10,932 participants</p>
                    <p>6.24% per year</p>
                    <button>View</button>
                </div>
                <div className="listing-card">
                    <h3>Binance Index Strategy</h3>
                    <p>Medium risk</p>
                    <p>264 participants</p>
                    <p>12.56% per year</p>
                    <button>View</button>
                </div>
                {/* Repeat for other listings */}
            </div>
        </div>
    );
};

export default PropertyListings;
