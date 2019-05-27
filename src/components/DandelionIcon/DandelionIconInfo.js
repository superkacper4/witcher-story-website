import React from "react";
import DandelionIconClose from "./DandelionIconClose";

const DandelionIconInfo = ({cssClass, closeFn, Ptext, H3text, img, alt}) => (
    <div className={cssClass}>
    <DandelionIconClose
    closeFn = {closeFn}
    />
    <img src={img} alt={alt}/>
    <h3>{H3text}</h3>
    <p>
        {Ptext}
    </p>

    </div>
)

export default DandelionIconInfo