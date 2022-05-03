import React from "react";
import {BiSearch} from "react-icons/bi"
import {IoIosArrowBack} from "react-icons/io"

export default function SearchBar(props) {
    
    const [toggleSearch, setToggleSearch] = React.useState(false)

    const spread = () => {
        console.log(toggleSearch)
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
            <BiSearch onClick={spread} style = {{
                position: "absolute",
                color: "white",
                fontSize: "1.4rem",
                paddingLeft: "0.25rem",
                paddingTop: "0.125rem",
                opacity: !toggleSearch? "100%": "0%",
                transform: !toggleSearch? "scale(1)": "scale(1.1)",
                transition: "all 0.3s ease-in"
            }}/>
            <IoIosArrowBack onClick={spread} style = {{
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
        {toggleSearch && <input list = "suggestionsList" id = "search" type = "search" style = {{
            position: "absolute",
            left: "13%",
            width: "85%",
            outline: "none",
            height: "1.48rem",
            textIndent: "1rem",
            border: "none",
            borderRadius: "999999rem"
        }}/>}
        <datalist id = "suggestionsList">
            {props.suggestions}
        </datalist>
    </div>
}