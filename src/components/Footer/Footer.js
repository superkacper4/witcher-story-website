import React from "react";
import styles from "./Footer.module.scss";

class Footer extends React.Component {
  goUpFn = () => {
    window.scrollBy(0, -140);
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <h3>Made by Kacper</h3>
        <h4>kucza06@wp.pl</h4>
        <button onClick={this.goUpFn} className={styles.arrow}>
          <i class="fas fa-arrow-circle-down" />
        </button>
      </div>
    );
  }
}

export default Footer;
