import React from "react"
import styles from "./FourthPage.module.scss"
import WitcherInfo from "./img/witcherinfo1.jpg"
import ScrollArrow from "../../ScrollArrow/ScrollArrow"
import DandelionIconWrapper from "../../DandelionIcon/DandelionIconWrapper";
import ScrollArrowReverse from "../../ScrollArrow/ScrollArrowReverse";


class FourthPage extends React.Component {

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
        <h2>Most known witcher</h2>
        <p className={styles.text}>
        Behold our hero: subjected to mutations and rigorous sword and sorcery training as a child, he has become a superhuman monster slayer. Always penniless and often disdained by those whom he protects, he wanders the world seeking work. Fate has little mercy for him, piling obstacles in his way, yet he trudges on. He has more scruples than a beggaring bum has fleas. Doubts haunt him even when a band of ruffians, knives drawn, approaches him on the highway. Is he a good man? I do not think so. Does he try to maintain his humanity? I believe he does.
        </p>

        <DandelionIconWrapper
            IconText = {"My best friend and the best witcher.."}
            Ptext={`Geralt of Rivia was a witcher, Ciri's adoptive father, and despite their tumultuous relationship, loved the sorceress Yennefer, who was considered the love of his life.  During the Trial of the Grasses, Geralt exhibited unusual tolerance for the mutagens that grant witchers their abilities. Accordingly, Geralt was subjected to further experimental mutagens which rendered his hair white and may have given him greater speed, strength, and stamina than his fellow witchers. Despite his title, Geralt did not hail from the city of Rivia. After being left with the witchers by his mother, Visenna, he grew up in their keep of Kaer Morhen in the realm of Kaedwen. In the interest of appearing more trustworthy to potential clients, young witchers were encouraged to make up surnames for themselves by master Vesemir. As his first choice, Geralt chose "Geralt Roger Eric du Haute-Bellegarde", but this choice was dismissed by Vesemir as silly and pretentious, so "Geralt" was all that remained of his chosen name. "Of Rivia" was a more practical alternative and Geralt even went so far as to adopt a Rivian accent to appear more authentic.Later, Queen Meve of Lyria knighted him for his valour in the Battle for the Bridge on the Yaruga conferring on him the formal title "of Rivia", which amused him. He, therefore, became a true knight of Lyria, only to lose the title soon after for departing.`}
            H3text={"Geralt of Rivia"}
            img={WitcherInfo}
            alt={"WitcherInfo4ndSection"}
        />
        <ScrollArrowReverse/>
        <ScrollArrow/>
    </div>
        )
    }
}


export default FourthPage