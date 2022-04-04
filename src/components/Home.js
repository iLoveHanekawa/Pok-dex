import React from "react"
import "../index.css"
import List from "./List"

export default function Home(props) {

    const moveUp = ({target}) => {
        const pokeball = target.offsetParent;

        pokeball.style.transform = "translateY(-50vh)"
        pokeball.style.opacity = "0"
        pokeball.style.transition = "all 0.5s ease-in"

        setTimeout(() => {
            props.setIsOpen(!props.isOpen);
        },500);
    }

    return <div className = "homeUi">
        {!props.isOpen && <div className = "pokeball">
            <div className = "purple"></div>
            <div className = "bigLightCircle"></div>
            <div className = "pinkCircle1"></div>
            <div className = "pinkCircle2"></div>
            <div className = "blackStrip"></div>
            <div className = "blackCircle"></div>
            <div className = "whiteCircleBig"></div>
            <div className = "whiteCircleSmall" onClick = {(event) => moveUp(event)}></div>
            <div className = "lightCircle1"></div>
            <div className = "lightCircle2"></div>
        </div>}
        {props.isOpen && <List isOpen = {props.isOpen}/>}
    </div>
}