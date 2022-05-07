import React from "react"
import "../index.css"
import List from "./List"
import Pokeball from "./Pokeball"
import Info from "./Info"

export default function Home(props) {

    return <div className = "homeUi">
        {props.isOpen? <List showDescription = {(id, name, height, weight, type1, type2 = "none", description, setIsDescriptionVisible) => {
            return <div>
                <Info id = {id} name = {name} height = {height} weight = {weight} type1 = {type1} type2 = {type2} description = {description} setIsDescriptionVisible = {setIsDescriptionVisible}/>
            </div>
        }} />: <Pokeball isOpen = {props.isOpen} setIsOpen = {props.setIsOpen}/>} 
    </div>
}