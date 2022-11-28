import React from 'react';
import "../styles/TodoSearch.css"
import searchIcon from "../images/search__icon.svg"
import { TodoContext } from '../hooks/TodoContext';

const TodoSearch = () => {
    const { searchValue, setSearchValue } =React.useContext(TodoContext)

    const onSearchValueChange= (event) =>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return (
        <div className="search__container">
            <input
            placeholder="Search..."
            type="text"
            className="input__search"
            value={searchValue}
            onChange={onSearchValueChange}
            />
            <img src= {searchIcon} alt="search__icon" />
        </div>
    );
}

export default TodoSearch;