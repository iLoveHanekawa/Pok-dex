import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import List from "./components/List"

export default function App() {
    const [isOpen, setIsOpen] = React.useState(false)
    return <div>
        <Routes>
            <Route path = '/' element = {<Home isOpen = {isOpen} setIsOpen = {setIsOpen}/>} />
        </Routes>
    </div>
}
