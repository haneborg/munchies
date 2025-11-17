import React from "react";
import "./HomePage.css";

interface HomeProps {
    onWebClick: () => void;
    onAppClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onWebClick, onAppClick }) => {
    return (
        <div className="home-container">
            <div className="home-section left" onClick={onAppClick}>
                <h1>APP</h1>
            </div>

            <div className="home-section right" onClick={onWebClick}>
                <h1>WEB</h1>
            </div>
        </div>
    );
};

export default Home;
