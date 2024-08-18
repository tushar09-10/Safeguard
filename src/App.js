import React from 'react';
import Header from './components/Header.js';
import MainSection from './components/MainSection.js';
import PropertyListings from './components/PropertyListing.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <MainSection />
            <PropertyListings />
            <Footer />
        </div>
    );
}

export default App;


// git add .
// git commit -m "message"
// git push origin main