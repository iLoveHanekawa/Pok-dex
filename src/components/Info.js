import React from "react";
import BallIcon from "./BallIcon";
import Type from "./Type";
import {IoIosArrowBack} from "react-icons/io"

export default function Info(props) {

    const kgToLbs = (x) => {
        return `${(x / 10 * 2.2046).toFixed(1)} lbs`
    }

    const cmToFeetAndInches = (x) => {
        let feet = (x * 10 / 30.48).toFixed(1)
        let inches = ((feet - Math.floor(feet)) * 12).toFixed(0)
        return `${Math.floor(feet)}'${inches}"`
    }

    const name = props.name[0].toUpperCase() + props.name.slice(1)

    return <div style = {{
        top: "30%",
        left: "58%",
        height: "fit-content",
        overflow: "hidden",
        width: "80vw",
        position: "absolute",
    }}>
        <div style = {
            {
                width: "40.1vw",
                height: "2.6rem",
                marginBottom: "1.5rem",
                backgroundImage: "linear-gradient(110deg, #F84E1A 0%, #F84E1A 44.75%, black 45%, black 100%)",
                border: "1px solid black",
                display: "flex",
                gap: "15rem",
                alignItems: "center",
                color: "white",
                textIndent: "1.5rem",
                overflow: "hidden"
            }
        }>
            <IoIosArrowBack onClick = {() => {
                props.setIsDescriptionVisible(i => !i)
            }} style = {
                {
                    color: "white",
                    position: "absolute",
                    fontSize: "2rem",
                }
            }/>
            <div style = {{
                marginLeft: "1rem"
            }}>{props.id}</div>
            <div style = {
                {
                    display: "flex",
                    justifyContent: "space-between",
                    width: "40.1vw",
                    paddingRight: "1rem",
                    alignItems: "center"
                }
            }>
                <div>{name}</div>
                <BallIcon color = "white"/>
            </div>
        </div>
        <div className="infoBox">
            <div className="greyInfoBox">Type</div>
            <div className="whiteInfoBox">
                <Type select = {props.type1}/>
                {props.type2 != "none" && <Type select = {props.type2}/>}
            </div>
        </div>
        <div className="infoBox">
            <div className="greyInfoBox">Height</div>
            <div className="whiteInfoBox">{cmToFeetAndInches(props.height)}</div>
        </div>
        <div className="infoBox">
            <div className="greyInfoBox">Weight</div>
            <div className="whiteInfoBox">{kgToLbs(props.weight)}</div>
        </div>
        <div className="infoDescription">{props.description}</div>
    </div>
}