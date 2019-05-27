import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

const NavList = ({ cssClass, navItemClickFn }) => (
  <ul className={cssClass}>
    <li>
      <NavLink
        exact
        activeClassName={styles.navItemLinkActive}
        className={styles.navItemLink}
        to="/"
        onClick={navItemClickFn}
      >
        Story
      </NavLink>
    </li>
    <li>
      <NavLink
        exact
        activeClassName={styles.navItemLinkActive}
        className={styles.navItemLink}
        to="/AnotherPage"
        onClick={navItemClickFn}
      >
        Another
      </NavLink>
    </li>
  </ul>
);
export default NavList;
