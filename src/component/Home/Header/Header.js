import React from 'react';
import './Header.css'
import HeaderMain from '../HeaderMain/HeaderMain';
import NavBer from '../NavBer/NavBer';

const Header = () => {
    return (
        <div>
            <NavBer></NavBer>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;