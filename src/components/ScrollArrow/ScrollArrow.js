import React from "react";
import styles from "./ScrollArrow.module.scss"

class ScrollArrow extends React.Component{

    scrollFn = () =>{
        // window.scroll(0,this.props.ScrollPage)

        window.scrollBy(0, window.innerHeight)

        // window.scrollBy(0,
        //     for(let i = 0; i>=window.innerHeight; i++) {

        //     }

        //     window.innerHeight)
    }

    render(){
        return(
            <button
            className={styles.arrow}
            onClick={this.scrollFn}
            >
            <i class="fas fa-arrow-circle-down"></i>
            </button>
        )
    }
}

export default ScrollArrow