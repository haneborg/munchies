import React from "react";
import Header from "../../components/Header/Header";
import './IntroPage.css';

interface IntroPageProps {
    setContinuePressed: React.Dispatch<React.SetStateAction<boolean>>
}

const IntroPage: React.FC<IntroPageProps> = ({ setContinuePressed }) => {
    const handleContinue = () => {
        setContinuePressed(true);
    }

    return (
        <div className="intro-page">
            <Header whiteLogo={true} />
            <div className='intro-content'>
                <h1 className="intro-header">Treat yourself.</h1>
                <p className="intro-text">Find the best restaurants in your city and get it delivered to your place!</p>
            </div>
            <button className="intro-button" onClick={handleContinue}>Continue</button>
        </div>
    );
}
export default IntroPage;