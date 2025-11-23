import React from 'react';
import './Header.css';

interface HeaderProps {
    isWhiteLogo?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isWhiteLogo }) => {
    return (
        <>
            <div>
                {isWhiteLogo ? (
                    <img src="/assets/logo/logo-white.svg" className="header-logo" />
                ) : (
                    <img src="/assets/logo/logo-black.svg" className="header-logo" />
                )}
            </div>
        </>
    );
}

export default Header;