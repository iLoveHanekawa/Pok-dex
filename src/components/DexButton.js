import React from "react";
import BallIcon from "./BallIcon";

export default function DexButton(props) {

    const buttonStyles = {
        width: "26.375rem",
        height: "2.625rem",
        backgroundImage: "linear-gradient(110deg, #F84E1A 0%, #F84E1A 44.75%, black 45%, black 100%)",
        borderRadius: "999999rem",
        textIndent: "2.7rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        boxShadow: "0px 0px 0.9rem black"
    }
    
    const titleFlexStyles = {
        display: "flex",
        justifyContent: "space-between",
        width: "17rem",
        alignItems: "center",
        paddingLeft: "5rem",
        paddingRight: "1rem"
    }

    return <div style = {buttonStyles}>
        Arjun
        <div style = {titleFlexStyles}>
            <div>Pokemon</div>
            <BallIcon/>
        </div>
    </div>
}