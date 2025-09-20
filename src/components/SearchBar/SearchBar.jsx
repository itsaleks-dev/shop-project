import React from "react";
import SearchIcon from "../../assets/icons/SearchIcon";

import './SearchBar.scss';

const SearchBar = () => (
    <div className="src-search">
        <button className="src-search__cta" aria-label="Пошук">
            <SearchIcon />
        </button>
    </div>
);

export default SearchBar;