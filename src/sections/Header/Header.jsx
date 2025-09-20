import React from 'react';
import Burger from "./Burger"
import Menu from "./Menu";
import Logo from "./Logo";
import Userbar from "./Userbar";

import './Header.scss';

const Header = () => {
    return (
        <section className='container container-header'>
            <header className='content content-header'>
                <div className='menu-bar'>
                    <Burger />
                    <Menu />
                </div>
                <Logo />
                <Userbar />
            </header>
        </section>
    );
};

export default Header;

