import React from "react";
import styles from "./DandelionIcon.module.scss";

const DandelionIconClose = ({closeFn}) => (
    <button
    className={styles.DandelionIconClose}
    onClick = {closeFn}
    >+
    </button>
)

export default DandelionIconClose