import React from "react";

export default function List(props) {

    const wholeBlock = React.useRef()
    const greyBar = React.useRef()

    console.log("rerendered")
    React.useEffect(() => {
        wholeBlock.current.style.transform = "translateX(0vw)"
        wholeBlock.current.style.opacity = "100%"
        wholeBlock.current.style.transition = "all 0.15s"
        greyBar.current.style.opacity = "100%"
        greyBar.current.style.transition = "all 0.2s"
    }, [])

    return <div className = "listUi" >
        <div className = "wholeBlock" ref = {wholeBlock}>
            <div className = "orangeBlock"></div>
            <div className = "blackBar"></div>
        </div>
        <div className = "greyBar" ref ={greyBar}></div>
    </div>
}