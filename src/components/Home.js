import React from "react"
import "../index.css"
import List from "./List"
import Pokeball from "./Pokeball"

export default function Home(props) {
    console.log("rendered")
    return <div className = "homeUi">
        {/* <Pokeball isOpen = {props.isOpen} setIsOpen = {props.setIsOpen}/> */}
        {props.isOpen? <List/>: <Pokeball isOpen = {props.isOpen} setIsOpen = {props.setIsOpen}/>}
    </div>
}