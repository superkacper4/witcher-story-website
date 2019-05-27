import React from "react"
import styles from "./SecondPage.module.scss"
import WitcherInfo from "./img/witcherInfo.jpg"
import ScrollArrow from "../../ScrollArrow/ScrollArrow"
import DandelionIconWrapper from "../../DandelionIcon/DandelionIconWrapper";
import ScrollArrowReverse from "../../ScrollArrow/ScrollArrowReverse";

class SecondPage extends React.Component {

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
        ref={this.div}>
            <h2>Why do they exist?</h2>
            <p className={styles.text}>
            For other uses, see The Witcher.
            Indeed, there is nothing more repulsive than these monsters that defy nature and are known by the name of witcher, as they are the offspring of foul sorcery and witchcraft. They are unscrupulous scoundrels without conscience and virtue, veritable creatures from hell capable only of taking lives...
            </p>

            <DandelionIconWrapper
                IconText = {"Witchers are monsters slayers.."}
                Ptext={`A witcher (also wiccan or hexer or vedymin or witchman; in the Elder Speech: vatt'ghern) is someone who has undergone extensive training, ruthless mental and physical conditioning, and mysterious rituals (which take place at "witcher schools" such as Kaer Morhen) in preparation for becoming an itinerant monsterslayer for hire. Geralt, the central character in Andrzej Sapkowski's Witcher series and the subsequent games inspired by them, is said in the stories to be one of the greatest witchers; he is certainly legendary, but whether famous or infamous is more open to interpretation (and/or subject to gameplay, as the case may be).`}
                H3text={"Witchers"}
                img={WitcherInfo}
                alt={"WitcherInfo2ndSection"}
            />
            <ScrollArrowReverse/>
            <ScrollArrow/>
        </div>
        )
    }
}

export default SecondPage