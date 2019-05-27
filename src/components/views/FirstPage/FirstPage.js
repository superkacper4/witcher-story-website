import React from "react"
import styles from "./FirstPage.module.scss"
import H2 from "../../Headers/H2";
import Dandelion from "./img/dandelion2.png"
import DandelionIconWrapper from "../../DandelionIcon/DandelionIconWrapper";
import ScrollArrow from "../../ScrollArrow/ScrollArrow";
import ScrollArrowReverse from "../../ScrollArrow/ScrollArrowReverse";
// let x = 0;
let cssClass = styles.wrapper;
// let y = 0;

class FirstPage extends React.Component{

    onMouseMove = (e) => {
        // x=e.clientX/80;
        // y=e.clientY/80;
        // this.div.current.style.top = -x + "px";
        // this.div.current.style.left = -y + "px";
        // console.log(x)
        // console.log(y)
    }

    handleScroll = () =>{
        const scrollY = window.scrollY;
        if(scrollY>this.div.current.offsetTop + this.div.current.offsetHeight-window.innerHeight-1){
            this.div.current.className = styles.active;
            console.log("active")
        }
        else{
            this.div.current.className = styles.wrapper;
            console.log("nie active")
        }
    }

    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll)
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.handleScroll)
    }

    div=React.createRef();

    render(){
        return(
        <div
        className={styles.wrapper}
        onMouseMove = {this.onMouseMove}
        ref={this.div}
        >
        <div
        className={styles.text}

        >
        <H2
            H2text="Meet Dandelion"
        />
        <p>
            Julian Alfred Pankratz, Viscount de Lettenhove, better known as Dandelion, was a poet, minstrel, bard, and close friend of Geralt of Rivia. He will be our guide in witcher's story
        </p>

        </div>

        <DandelionIconWrapper
            IconText={"Click here to learn more about me."}
            Ptext={"About Dandelion's parentage not much is known, except that he was of noble birth. He was a cousin of Ferrant de Lettenhove, royal instigator of Kerack. He received his early education in a temple school, where, according to Geralt, literacy was beaten into him with a cane. However, he didn't truly get into poetry until he was 19, after being inspired by his love for Countess de Stael. Dandelion studied the seven liberal arts for four years at Oxenfurt University, later becoming a professor, he taught students for a year, and then left the academy to travel the world. He later visited Oxenfurt from time to time to give guest lectures. Dandelion studied the seven liberal arts for four years at Oxenfurt University, later becoming a professor, he taught students for a year, and then left the academy to travel the world. He later visited Oxenfurt from time to time to give guest lectures. Within a very few years he gained worldwide fame and became known as one of the best minstrels in the Northern Kingdoms, and his best known song was the Ballad of the Lion Cub of Cintra.Dandelion studied the seven liberal arts for four years at Oxenfurt University, later becoming a professor, he taught students for a year, and then left the academy to travel the world. He later visited Oxenfurt from time to time to give guest lectures."}
            H3text={"Dandelion"}
            img={Dandelion}
            alt={"DandelionInfo"}
        />

        <ScrollArrowReverse/>
        <ScrollArrow/>
        </div>
        )
    }
}


export default FirstPage;