import React from "react";
import styles from "./ThirdPage.module.scss";
import ScrollArrow from "../../ScrollArrow/ScrollArrow";
import ScrollArrowReverse from "../../ScrollArrow/ScrollArrowReverse";

class ThirdPage extends React.Component {
  handleScroll = () => {
    const scrollY = window.scrollY;
    if (
      scrollY >
      this.div.current.offsetTop +
        this.div.current.offsetHeight -
        window.innerHeight -
        1
    ) {
      this.div.current.className = styles.active;
      console.log("active");
    } else {
      this.div.current.className = styles.wrapper;
      console.log("nie active");
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  div = React.createRef();

  render() {
    return (
      <div className={styles.wrapper} ref={this.div}>
        <div className={styles.header}>
          <h2>Witchers Schools</h2>
          <p className={styles.text}>
            Witcher Schools are the training ground for itinerent monster
            slayers to-be, each one is built on the blood, sweat, and tears of
            countless children who stood within them, honing their technique and
            skill. Though each school trains in the ways of weaponry, alchemy,
            and the beastiary, each school trains in arts and equipment that are
            unique to them. Such as the School of the Cat that designs armor
            that provides maximum flexibility, or the School of the Manticore
            that studies the art of poisons, or the School of the Griffin that
            emphasizes magic.
          </p>
        </div>
        <ScrollArrowReverse />
        <ScrollArrow />
      </div>
    );
  }
}

export default ThirdPage;
