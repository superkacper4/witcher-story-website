import React from "react";
import styles from "./TitlePage.module.scss";
import "./img/title.jpg";
import ScrollArrow from "../../ScrollArrow/ScrollArrow";

let x = 0;
let y = 0;

class TitlePage extends React.Component {
  onMouseMove = e => {
    x = e.clientX / 80;
    y = e.clientY / 80;
    this.div.current.style.backgroundPositionX = -x + "px";
    this.div.current.style.backgroundPositionY = -y + "px";
    console.log(x);
    console.log(y);
  };

  scroll(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  div = React.createRef();

  render() {
    return (
      <div
        ref={this.div}
        className={styles.wrapper}
        onMouseMove={this.onMouseMove}
      >
        <header>
          <h1>History of Witchers</h1>
          <h2>Short story about Witchers, written by fan</h2>
        </header>

        <ScrollArrow
        // ScrollPage = {this.div}
        />
      </div>
    );
  }
}

export default TitlePage;
