import React from "react";
import { Link } from "react-router-dom";

const Menu = () => (
    <div className="menu">
        <nav>
            <ul className="menu__list">
                <li><Link to="/" className="menu__link">Каталог</Link></li>
                <li><Link to="/" className="menu__link">Тип волосся</Link></li>
                <li><Link to="/" className="menu__link">Акції</Link></li>
                <li><Link to="/" className="menu__link">Про Newsha</Link></li>
            </ul>
        </nav>
    </div>
);

export default Menu;
