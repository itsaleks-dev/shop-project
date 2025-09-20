import React from "react";
import { Link } from "react-router-dom";
import UserIcon from "../../assets/icons/UserIcon";
import CartIcon from "../../assets/icons/CartIcon";

const Userbar = () => (
    <div className="userbar">
        <div className="src-user">
            <Link to="/" className="src-user__link" aria-label="Профіль">
                <UserIcon />
            </Link>
        </div>

        <div className="src-cart">
            <button className="src-cart__cta" aria-label="Кошик">
                <CartIcon />
            </button>
        </div>
    </div>
);

export default Userbar;
