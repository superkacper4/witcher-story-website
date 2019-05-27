import React from 'react';
import NavList from './NavList';
import NavIcon from './NavIcon';
import styles from "./Nav.module.scss"


let cssClass = styles.wrapper
let HamburgerCssClass = styles.Hamburger

class Nav extends React.Component {
    state = {
        isClicked: false,
    }



    isClickedFunction = () => {
        this.setState({isClicked:!this.state.isClicked})
        // this.List.classList.add(styles.active)


        if(this.state.isClicked){
            cssClass = styles.wrapper
            HamburgerCssClass = styles.Hamburger

        }
        else{
            cssClass = styles.NavActive
            HamburgerCssClass = styles.HamburgerActive
        }
        // this.state.isClicked ?
        // cssClass = styles.wrapper:
        // cssClass = styles.active
        console.log(cssClass)
    }

    navItemClickFunction = () => {
        this.setState({isClicked:!this.state.isClicked})

        if(this.state.isClicked){
            cssClass = styles.wrapper
            HamburgerCssClass = styles.Hamburger

        }
        else{
            cssClass = styles.NavActive
            HamburgerCssClass = styles.HamburgerActive
        }
        // this.state.isClicked ?
        // cssClass = styles.wrapper:
        // cssClass = styles.active
        window.scrollTo(0,0);
    }

    // List = React.createRef();
    // Icon = React.createRef();

    render(){
        return(
            <>
            <NavIcon
                // ref= {this.Icon}
                isClickedFn={this.isClickedFunction}
                cssClass = {HamburgerCssClass}
            />
            <NavList
                // ref={this.List}
                cssClass={cssClass}
                navItemClickFn={this.navItemClickFunction}
            />

            </>
        )
    }

}


export default Nav