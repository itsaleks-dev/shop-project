import React from 'react';
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import SearchBar from '../../components/SearchBar/SearchBar';
import Menu from "./Menu";
import Logo from "./Logo";
import Userbar from "./Userbar";

import './Header.scss';

const Header = () => {
    return (
        <section className='container container-header'>
            <header className='content content-header'>
                <div className='menu-bar'>
                    <BurgerMenu />
                    <Menu />
                </div>
                <Logo />
                <div className='userbar'>
                    <SearchBar />
                    <Userbar />
                </div>
            </header>
        </section>
    );
};

export default Header;

