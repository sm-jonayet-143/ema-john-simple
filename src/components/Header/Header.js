import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Review</a>
                <a href="manage">Manage inventory</a>
            </nav>
        </div>
    );
};

export default header;