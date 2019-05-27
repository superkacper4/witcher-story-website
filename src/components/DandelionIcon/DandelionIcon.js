import React from "react";
import styles from "./DandelionIcon.module.scss";

const DandelionIcon = ({isClickedFn}) => (
    <button
    className={styles.DandelionIcon}
    onClick = {isClickedFn}
    >
    </button>
)

export default DandelionIcon