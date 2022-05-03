import React from "react";
import bug from "../images/Bug.svg"
import dark from "../images/Dark.svg"
import dragon from "../images/Dragon.svg"
import electric from "../images/Electric.svg"
import fairy from "../images/Fairy.svg"
import fighting from "../images/Fighting.svg"
import fire from "../images/Fire.svg"
import flying from "../images/Flying.svg"
import ghost from "../images/Ghost.svg"
import grass from "../images/Grass.svg"
import ground from "../images/Ground.svg"
import ice from "../images/Ice.svg"
import normal from "../images/Normal.svg"
import poison from "../images/Poison.svg"
import psychic from "../images/Psychic.svg"
import rock from "../images/Rock.svg"
import steel from "../images/Steel.svg"
import water from "../images/Water.svg"


export default function Type(props) {

    const colors = {
        "bug": ["#83C300", bug],
        "dark": ["#5B5466", dark],
        "dragon": ["#006FC9", dragon],
        "electric": ["#FBD100", electric],
        "fairy": ["#FB89EB", fairy],
        "fighting": ["#E0306A", fighting],
        "fire": ["#FF9741", fire],
        "flying": ["#89AAE3", flying],
        "ghost": ["#4C6AB2", ghost],
        "grass": ["#38BF4B", grass],
        "ground": ["#E87236", ground],
        "ice": ["#4CD1C0", ice],
        "normal": ["#919AA2", normal],
        "poison": ["#B567CE", poison],
        "psychic": ["#FF6675", psychic],
        "rock": ["#C8B686", rock],
        "steel": ["#5A8EA2", steel],
        "water": ["#3692DC", water]
    }

    return <div style = {
        {
            width: "9vw",
            display: "flex",
            height: "3.7vh",
            borderRadius: "0.3rem",
            backgroundColor: colors[props.select][0],
            justifyContent: "space-between",
            alignItems: "center",
            overflow: "hidden",
            position: "relative"
        }
    }>
        <img style = {{
            height: "5vh"
        }} src = {colors[props.select][1]}/>
        <div style = {
            {
                backgroundColor: "#333333",
                width: "18vw",
                height: "5vh",
                transform: "skew(160deg)"
            }
        }></div>
        <div style = {
            {
                position: "absolute",
                backgroundColor: "#333333",
                width: "18vw",
                height: "5vh",
                left: "40%",
                display: "flex",
                alignItems: "center",
                color: "white"
            }
        }>{props.select.toUpperCase()}</div>
    </div>
}
