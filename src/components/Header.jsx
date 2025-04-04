import React from 'react';
import chefLogo from '/chef-munchie-logo.png';

function Header(){
    return(
        <header className="header">
            <img src='/chef-munchie-logo.png' alt="chef logo" />
            <h1>Chef Munchie</h1>
        </header>
    )
}

export default Header;