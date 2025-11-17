import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <>
            <div>
                <img src="/src/assets/logo.svg" className="header-logo" />
            </div>
        </>
    );
}

export default Header;