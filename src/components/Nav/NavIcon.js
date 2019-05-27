import React from "react";
import styles from "./Nav.module.scss";

const NavIcon = ({ isClickedFn, cssClass }) => (
  <button className={styles.NavIcon} onClick={isClickedFn}>
    <div className={cssClass} />
  </button>
);

export default NavIcon;
