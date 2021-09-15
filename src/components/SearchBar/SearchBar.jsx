import React from 'react';

import styles from './SearchBar.module.css'

const SearchBar = ({handleOnChange, requestText, handleOnClick}) => (
    <form>
        <h1 className={styles.header}>Find comics</h1>
        <div className={styles.search_wrapper}>
            <input className={styles.input} onChange={handleOnChange}
                   value={requestText} type="text"/>
            <button className={styles.button_search} onClick={handleOnClick}>Search</button>
        </div>
    </form>
);


export default SearchBar;
