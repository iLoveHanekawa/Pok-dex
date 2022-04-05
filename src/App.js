import React from "react"
import { Route, Routes } from "react-router-dom"
import NoMatch from "./components/NoMatch"
import Home from "./components/Home"
import List from "./components/List"
import Pokeball from "./components/Pokeball"

export default function App() {
    const [isOpen, setIsOpen] = React.useState(false)
    return <div>
        <Routes>
            <Route path = '/' element = {<Home isOpen = {isOpen} setIsOpen = {setIsOpen}/>} />
            <Route path = '*' element = {<NoMatch />}/>
        </Routes>
    </div>
}
