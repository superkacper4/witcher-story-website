import React from "react";
import DandelionIcon from "./DandelionIcon";
import DandelionIconText from "./DandelionIconText";
import DandelionIconInfo from "./DandelionIconInfo";
import styles from "./DandelionIcon.module.scss"
let cssClass=styles.Info

class DandelionIconWrapper extends React.Component{
    state = {
        isClicked: false,
    }

    isClickedFunction = () => {
        this.setState({isClicked:true})
        this.state.isClicked ?
        cssClass = styles.Info:
        cssClass = styles.active
        console.log(cssClass)
    }

    closeInfo = () => {
        this.setState({isClicked:false})
        this.state.isClicked ?
        cssClass = styles.Info:
        cssClass = styles.active
        console.log(cssClass)
    }

    render(){
        return(
        <div>
            <DandelionIcon
                isClickedFn={this.isClickedFunction}
            />
            <DandelionIconText
                IconText={this.props.IconText}
            />
            <DandelionIconInfo
                cssClass={cssClass}
                closeFn = {this.closeInfo}
                H3text={this.props.H3text}
                Ptext={this.props.Ptext}
                img={this.props.img}
                alt={this.props.alt}
            />
        </div>
        )
    }
}


export default DandelionIconWrapper