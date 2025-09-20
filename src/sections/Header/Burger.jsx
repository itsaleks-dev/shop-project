import React from "react";
import BurgerIcon from "../../assets/icons/BurgerIcon";

const Burger = () => (
    <div className="burger">
        <button className="burger__cta" aria-label="Відкрити меню">
    <BurgerIcon />
        </button>
    </div>
);

export default Burger;
