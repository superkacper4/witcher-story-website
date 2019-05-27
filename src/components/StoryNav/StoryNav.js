import React from "react";
import styles from "./StoryNav.module.scss";

class StoryNav extends React.Component {
  scrollStart = () => {
    window.scrollTo(0, 0);
  };

  scrollFirst = () => {
    window.scrollTo(0, window.innerHeight);
  };

  scrollSecond = () => {
    window.scrollTo(0, 2 * window.innerHeight);
  };

  scrollThird = () => {
    window.scrollTo(0, 3 * window.innerHeight);
  };

  scrollFourth = () => {
    window.scrollTo(0, 4 * window.innerHeight);
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.wrapperDecoration} />

        <div className={styles.item} onClick={this.scrollStart}>
          <p className={styles.itemName}>Start</p>
        </div>

        <div className={styles.item} onClick={this.scrollFirst}>
          <p className={styles.itemName}>Dandelion</p>
        </div>

        <div className={styles.item} onClick={this.scrollSecond}>
          <p className={styles.itemName}>Witcher</p>
        </div>

        <div className={styles.item} onClick={this.scrollThird}>
          <p className={styles.itemName}>Schools</p>
        </div>

        <div className={styles.item} onClick={this.scrollFourth}>
          <p className={styles.itemName}>Geralt</p>
        </div>
      </div>
    );
  }
}

export default StoryNav;
