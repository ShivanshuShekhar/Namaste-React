import React from "react";
import ReactDOM from 'react-dom/client';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5296974.png" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const RestaurantCard = () => {
    return (
        <div className="res-card" style={{backgroundColor: '#f0f0f0'}}>
            <img className="res-logo" src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/spaghetti-carbonara-382837d.jpg?resize=768,574" alt="res-logo" />
            <h3>Meghana Foods</h3>
            <h4>Spaghetti Carbonara</h4>
            <h4>4.4 Stars</h4>
            <h4>38 Minutes</h4>
        </div>
    )
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard />
            </div>
        </div>
    )
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);