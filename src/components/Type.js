import React from "react";
import bug from "../images/Bug.svg"

export default function Type() {
    return <div style = {
        {
            width: "20vw",
            display: "flex",
            height: "5vh",
            borderRadius: "0.3rem",
            backgroundColor: "#83C300",
            justifyContent: "space-between",
            alignItems: "center",
            overflow: "hidden",
            position: "relative"
        }
    }>
        <img style = {{
            height: "5vh"
        }} src = {bug}/>
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
        }>GRASS</div>
    </div>
}
