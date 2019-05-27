import React from "react";
import styles from "./StoryNav.module.scss";

class StoryNav extends React.Component{
    state = {
        itemClass1: styles.item,
        itemClass2: styles.item,
        itemClass3: styles.item,
        itemClass4: styles.item,
        itemClass5: styles.item,
    }

    scrollStart = () => {
        window.scrollTo(0, 0);
        this.setState({
            itemClass1: styles.active,
            itemClass2: styles.item,
            itemClass3: styles.item,
            itemClass4: styles.item,
            itemClass5: styles.item,
        })
        // this.div1.classList.add(styles.active)
    }


    scrollFirst = () => {
        window.scrollTo(0,window.innerHeight);
        this.setState({
            itemClass1: styles.item,
            itemClass2: styles.active,
            itemClass3: styles.item,
            itemClass4: styles.item,
            itemClass5: styles.item,
        })
    }

    scrollSecond = () => {
        window.scrollTo(0, 2*window.innerHeight)
    }

    scrollThird = () => {
        window.scrollTo(0, 3*window.innerHeight)
    }

    scrollFourth = () => {
        window.scrollTo(0, 4*window.innerHeight)
    }

    div1=React.createRef();
    div2=React.createRef();
    div3=React.createRef();
    div4=React.createRef();
    div5=React.createRef();

    render(){
        return(
            <div className={styles.wrapper}>
            <div className={styles.wrapperDecoration}></div>

            <div className={this.state.itemClass1}
            onClick={this.scrollStart}
            ref={this.div1}
            >
            <p className={styles.itemName}>
            Start
            </p>
            </div>

            <div className={styles.item}
            onClick={this.scrollFirst}
            ref={this.div2}
            >
            <p className={styles.itemName}>
            Dandelion
            </p>
            </div>

            <div className={styles.item}
            onClick={this.scrollSecond}
            ref={this.div3}
            >
            <p className={styles.itemName}>
            Witcher
            </p>
            </div>

            <div className={styles.item}
            onClick={this.scrollThird}
            ref={this.div4}
            >
            <p className={styles.itemName}>
            Schools
            </p>
            </div>

            <div className={styles.item}
            onClick={this.scrollFourth}
            ref={this.div5}
            >
            <p className={styles.itemName}>
            Geralt
            </p>
            </div>

            </div>
        )
    }
}

export default StoryNav;