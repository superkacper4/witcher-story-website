import React from 'react';
import styles from "./Nav.module.scss"

const NavIcon = ({isClickedFn, cssClass}) => (
    <button
    className={styles.NavIcon}
    onClick={isClickedFn}
    >
    <div className={cssClass}></div>

    </button>
)

// class NavIcon extends React.Component {
//     render(){
//         return(
//             <button
//             className={styles.NavIcon}
//             onClick={this.isClickedFunction}
//             >
//                 Menu
//             </button>
//         )
//     }

// }

export default NavIcon