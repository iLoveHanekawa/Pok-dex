import React from "react";
import {BiSearch} from "react-icons/bi"
import {IoIosArrowBack} from "react-icons/io"

export default function SearchBar(props) {
    
    const [toggleSearch, setToggleSearch] = React.useState(false)

    const collapse = () => {
        setToggleSearch(i => !i)
    }

    return <div style = {
        {
            height: "2rem",
            position: "relative",
            width: "20%",
            borderRadius: "99999999rem",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            marginLeft: "3%"
        }
    }>
        <div style = {
            {
                backgroundColor: "#333333",
                height: "inherit",
                width: "100vw",
                position: "absolute",
                transition: "all 0.3s ease-in-out",
                clipPath: !toggleSearch? "circle(1.4% at 1% 50%)": "circle(100% at 1.2% 50%)",
            }
        }></div>
        <label style = {{
            display: "flex",
            alignItems: "center"
        }} htmlFor = "search">
            <BiSearch onClick={collapse} style = {{
                position: "absolute",
                color: "white",
                fontSize: "1.4rem",
                paddingLeft: "0.25rem",
                paddingTop: "0.125rem",
                opacity: !toggleSearch? "100%": "0%",
                transform: !toggleSearch? "scale(1)": "scale(1.1)",
                transition: "all 0.3s ease-in"
            }}/>
            <IoIosArrowBack onClick={collapse} style = {{
                position: "absolute",
                color: "white",
                fontSize: "1.4rem",
                paddingLeft: "0.2rem",
                paddingTop: "0.1rem",
                opacity: toggleSearch? "100%": "0%",
                transform: toggleSearch? "scale(1)": "scale(1.1)",
                transition: "all 0.3s ease-in"
            }}/>
        </label>
        {toggleSearch && <form style = {{
            position: "absolute",
            left: "13%",
            width: "85%",
            height: "1.48rem",
        }} onSubmit = {(event) => {
            event.preventDefault()
            let pokemon = event.target[0].value
            const setEverything = async () => {
                props.setSelect(pokemon)
                if(!(pokemon in props.allImages)) {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
                    const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)
                    const data2 = await response2.json()
                    const data = await response.json()
                    props.setDescription(i => {
                        return {
                            ...i,
                            [pokemon]: {
                                id: data.id,
                                name: data.species.name,
                                height: data.height,
                                weight: data.weight,
                                description: data2.flavor_text_entries[0].flavor_text,
                                type1: data.types[0].type.name,
                                type2: data.length > 1? data.types[1].type.name: "none"
                            }
                        }
                    })
                    props.setPreviewDescription({
                        id: data.id,
                        name: data.species.name,
                        height: data.height,
                        weight: data.weight,
                        description: data2.flavor_text_entries[0].flavor_text,
                        type1: data.types[0].type.name,
                        type2: data.types.length > 1? data.types[1].type.name: "none"
                    })
                    props.setPreview(data.sprites.other['official-artwork'].front_default)
                    props.setAllImages(i => {
                        return {
                            ...i,
                            [pokemon]: data.sprites.other['official-artwork'].front_default
                        }
                    })
                }
                else {
                    props.setPreview(props.allImages[pokemon])
                    props.setPreviewDescription(props.description[pokemon])
                }
                props.setIsDescriptionVisible(true)
            }
            setEverything()
        }}>
            <input list = "suggestionsList" id = "search" type = "search" style = {{
                position: "absolute",
                width: "100%",
                outline: "none",
                height: "1.48rem",
                textIndent: "1rem",
                border: "none",
                borderRadius: "999999rem"
            }}/> </form>}         
        <datalist id = "suggestionsList">
            {props.suggestions}
        </datalist>
    </div>
}