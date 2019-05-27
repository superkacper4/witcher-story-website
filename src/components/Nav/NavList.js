import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./Nav.module.scss"

const NavList = ({cssClass, navItemClickFn}) => (
    <ul className={cssClass}>
        {/* <NavLink exact
            >twitters</NavLink> */}
        <li>
            <NavLink exact
            activeClassName={styles.navItemLinkActive}
            className={styles.navItemLink}
            to="/"
            onClick={navItemClickFn}
            >About</NavLink>
        </li>
        <li>
            <NavLink exact
            activeClassName={styles.navItemLinkActive}
            className={styles.navItemLink}
            to="/ContactPage"
            onClick={navItemClickFn}
            >Contact</NavLink>
        </li>

        {/* <NavItem
            item = {"About"}
        />
        <NavItem
            item = {"Kontakt"}
        /> */}
        </ul>
)
export default NavList