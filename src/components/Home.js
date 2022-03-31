import React from "react"
import "../index.css"

export default function Home() {

    const pokeball = React.useRef()
    const moveUp = () => {
        pokeball.current.style.transform = "translateY(-50vh)"
        pokeball.current.style.opacity = "0%"
        pokeball.current.style.transition = "all 0.15s ease-in"
    }

    return <div className = "pokeball" ref = {pokeball}>
        <div className = "purple"></div>
        <div className = "bigLightCircle"></div>
        <div className = "pinkCircle1"></div>
        <div className = "pinkCircle2"></div>
        <div className = "blackStrip"></div>
        <div className = "blackCircle"></div>
        <div className = "whiteCircleBig"></div>
        <div className = "whiteCircleSmall" onClick = {moveUp}></div>
        <div className = "lightCircle1"></div>
        <div className = "lightCircle2"></div>
    </div>
}