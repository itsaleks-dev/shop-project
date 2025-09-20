import React from "react";
import { Link } from "react-router-dom";
import LogoIcon from "../../assets/icons/LogoIcon";

const Logo = () => (
    <div className="logo">
        <Link to="/" className="logo__link">
        <LogoIcon />
        </Link>
    </div>
);

export default Logo;