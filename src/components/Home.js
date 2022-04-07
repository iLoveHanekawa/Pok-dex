import React from "react"
import "../index.css"
import List from "./List"
import Pokeball from "./Pokeball"

export default function Home(props) {

    
    return <div className = "homeUi">
        {props.isOpen? <List/>: <Pokeball isOpen = {props.isOpen} setIsOpen = {props.setIsOpen}/>} 
    </div>
}