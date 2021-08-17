import React from 'react'
import {NavLink} from "react-router-dom";
import styles from './Header.module.css'

const Header = () => {
    return (
     <div className={styles.container}>
         <ul className={styles.list_container}>
             <NavLink to='/'><li>Main</li></NavLink>
             <NavLink to='/characters'><li>Characters</li></NavLink>
             <NavLink to='/comics'><li>Comics</li></NavLink>
         </ul>
     </div>
    )
}

export default Header