import React from "react"
import { Route, Routes } from "react-router-dom"
import NoMatch from "./components/NoMatch"
import Home from "./components/Home"
import DexButton from "./components/DexButton"

export default function App() {
    const [isOpen, setIsOpen] = React.useState(false)
    return <div style = {{height: "50vh", width: "50vw"}}>
        <Routes>
            <Route path = '/' element = {<DexButton isOpen = {isOpen} setIsOpen = {setIsOpen}/>} />
            <Route path = '*' element = {<NoMatch />}/>
        </Routes>
    </div>
}
