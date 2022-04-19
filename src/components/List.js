import React from "react";
import some_img from "../images/some_image.png"
import DexButton from "./DexButton";

export default function List() {

    const [updateStyle, setUpdateStyle] = React.useState(false)
    const [dexList, setDexList] = React.useState([])
    const [preview, setPreview] = React.useState(some_img)
    const [select, setSelect] = React.useState("none")

    React.useEffect(() => {
        const fetchRequest = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126`)
            const data = await response.json()
            console.log(data)
            setDexList(data.results)
        }
        fetchRequest()
    }, [])

    const wholeBlockStyle = !updateStyle? {
        position: "absolute",
        width: "100vw",
        height: "100vh",
        transform: "translateX(100vw)",
        opacity: "0%"
    }: {
        position: "absolute",
        width: "100vw",
        height: "100vh",
        transform: "translateX(0vw)",
        opacity: "100%",
        transition: "all 0.2s ease-out"
    }

    const greyBarStyle = !updateStyle? {
        position: 'absolute',
        opacity: '0%',
        top: '10%',
        height: '2.5rem',
        width: '100vw',
        backgroundColor: 'lightgrey',
        mixBlendMode: 'darken',
    }: {
        position: 'absolute',
        opacity: "100%",
        top: '10%',
        height: '2.5rem',
        width: '100vw',
        backgroundColor: 'lightgrey',
        mixBlendMode: 'darken',
        transition: "all 0.3s ease-out"
    }

    React.useEffect(() => {
        setTimeout(() => {
            setUpdateStyle(true)
        }, 100)
    }, [])

    return <div className = "listUi" >
        <div className = "wholeBlock" style = {wholeBlockStyle}>
            <div className = "orangeBlock">
            </div>
            <div className = "blackBar"></div>
        </div>
        <div className = "greyBar" style ={greyBarStyle}></div>
        <ul style = {{
            display: "flex",  
            listStyle: "none",  
            padding: "0.9rem",
            flexDirection: "column",
            gap: "1rem",
            top: "30%",
            left: "66%",
            position: "absolute",
            top: "18%",
            width: "97.5vw",
            height: "100vh",
            overflow: "scroll",
            width: "30rem"
            }}>
            {dexList.map((i, index) => (<li key = {index}><DexButton select = {select} setSelect = {setSelect} setPreview = {setPreview} index = {index} name = {i.name} /></li>))}
        </ul>
        <div>
            <img style = {
                {
                    position: "absolute",
                    width: "30rem",
                    top: "25%",
                    left: "6.2%"
                }
            } src = {preview}/>
        </div>
    </div>
}