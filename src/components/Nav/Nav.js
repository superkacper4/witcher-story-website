import React from "react";
import NavList from "./NavList";
import NavIcon from "./NavIcon";
import styles from "./Nav.module.scss";

let cssClass = styles.wrapper;
let HamburgerCssClass = styles.Hamburger;

class Nav extends React.Component {
  state = {
    isClicked: false
  };

  isClickedFunction = () => {
    this.setState({ isClicked: !this.state.isClicked });

    if (this.state.isClicked) {
      cssClass = styles.wrapper;
      HamburgerCssClass = styles.Hamburger;
    } else {
      cssClass = styles.NavActive;
      HamburgerCssClass = styles.HamburgerActive;
    }
    console.log(cssClass);
  };

  navItemClickFunction = () => {
    this.setState({ isClicked: !this.state.isClicked });

    if (this.state.isClicked) {
      cssClass = styles.wrapper;
      HamburgerCssClass = styles.Hamburger;
    } else {
      cssClass = styles.NavActive;
      HamburgerCssClass = styles.HamburgerActive;
    }
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <>
        <NavIcon
          isClickedFn={this.isClickedFunction}
          cssClass={HamburgerCssClass}
        />
        <NavList
          cssClass={cssClass}
          navItemClickFn={this.navItemClickFunction}
        />
      </>
    );
  }
}

export default Nav;
