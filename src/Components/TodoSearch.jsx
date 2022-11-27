import React from 'react';
import "../styles/TodoSearch.css"
import searchIcon from "../images/search__icon.svg"

const TodoSearch = () => {
    return (
        <div className="search__container">
            <input placeholder="Search..." type="text" className="input__search" />
            <img src= {searchIcon} alt="search__icon" />
        </div>
    );
}

export default TodoSearch;