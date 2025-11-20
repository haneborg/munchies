import React from 'react';
import './Header.css';

interface HeaderProps {
    whiteLogo?: boolean;
}

const Header: React.FC<HeaderProps> = ({ whiteLogo }) => {
    return (
        <>
            <div>
                {whiteLogo ? (
                    <img src="/src/assets/logo/logo-white.svg" className="header-logo" />
                ) : (
                    <img src="/src/assets/logo/logo-black.svg" className="header-logo" />
                )}
            </div>
        </>
    );
}

export default Header;