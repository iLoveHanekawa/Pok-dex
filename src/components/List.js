import React from "react";
import some_img from "../images/some_image.png"
import DexButton from "./DexButton";
import Info from "./Info";
import SearchBar from "./SearchBar";

export default function List(props) {

    const [updateStyle, setUpdateStyle] = React.useState(false)
    const [dexList, setDexList] = React.useState([])
    const [preview, setPreview] = React.useState(some_img)
    const [select, setSelect] = React.useState("none")
    const [allImages, setAllImages] = React.useState({})
    const [isDescriptionVisible, setIsDescriptionVisible] = React.useState(false)
    const [description, setDescription] = React.useState({})
    const [previewDescription, setPreviewDescription] = React.useState({})
    const [suggestions, setSuggestions] = React.useState([])

    React.useEffect(() => {
        const fetchRequest = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126`)
            const data = await response.json()
            setDexList(data.results)
            setSuggestions(data.results.map(i => {
                return <option key = {i.name}>{i.name}</option>
            }))
        }
        fetchRequest()
    }, [])

    const wholeBlockStyle = !updateStyle? {
        position: "absolute",
        width: "100vw",
        height: "100vh",
        zIndex: "0",
        transform: "translateX(100vw)",
        opacity: "0%"
    }: {
        position: "absolute",
        width: "100vw",
        height: "100vh",
        zIndex: "0",
        transform: "translateX(0vw)",
        opacity: "100%",
        transition: "all 0.2s ease-out"
    }

    const greyBarStyle = !updateStyle? {
        position: 'absolute',
        opacity: '0%',
        top: '10%',
        zIndex: "1",
        height: '2.5rem',
        width: '100vw',
        display: "flex",
        alignItems: "center",
        backgroundColor: 'lightgrey',
    }: {
        position: 'absolute',
        opacity: "100%",
        top: '10%',
        zIndex: "1",
        height: '2.5rem',
        width: '100vw',
        display: "flex",
        alignItems: "center",
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
        <div className = "greyBar" style ={greyBarStyle}>
            <SearchBar suggestions = {suggestions}/>
        </div>
        <div className = "wholeBlock" style = {wholeBlockStyle}>
            <div className = "orangeBlock">
                <div style = {
                    {
                        position: "absolute",
                        left: "50%",
                        transform: "translate(-50%)",
                        backgroundColor: "#F4693E",
                        height: "100vh",
                        width: "70vw"
                    }
                }></div>
                <div className = "blackBar">
                    <div style = {
                        {
                            transform: "skew(-160deg)",
                            color: "white",
                            width: "fit-content",
                            height: "inherit",
                            position: "absolute",
                            left: "22%",
                            top: "0"
                        }
                    }><h2 style = {
                        {
                            textAlign: "center",
                            height: "fit-content",
                            lineHeight: "0"
                        }
                    }>National Dex</h2>
                    </div>
                </div>
            </div>
        </div>
        {!isDescriptionVisible? <ul style = {{
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
            height: "75vh",
            overflow: "scroll",
            overflowX: "hidden",
            width: "30rem"
            }}>
            {dexList.map((i, index) => {
                return <li key = {index}>
                    <DexButton previewDescription = {previewDescription} 
                        setIsDescriptionVisible = {setIsDescriptionVisible} 
                        isDescriptionVisible = {isDescriptionVisible} 
                        description = {description} 
                        setPreviewDescription = {setPreviewDescription} 
                        setDescription = {setDescription} 
                        allImages = {allImages} 
                        setAllImages = {setAllImages} 
                        select = {select} 
                        setSelect = {setSelect} 
                        setPreview = {setPreview} 
                        index = {index} 
                        name = {i.name} />
                </li>})}
        </ul>: props.showDescription(previewDescription.id, previewDescription.name, previewDescription.height, previewDescription.weight, previewDescription.type1, previewDescription.type2, previewDescription.description, setIsDescriptionVisible)}
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
        <div>
            
        </div>
    </div>
}