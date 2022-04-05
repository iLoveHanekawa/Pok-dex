import React from "react";

export default function List() {

    const [updateStyle, setUpdateStyle] = React.useState(false)

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

    console.log(greyBarStyle)

    React.useEffect(() => {
        setTimeout(() => {
            setUpdateStyle(true)
        }, 100)
    }, [])

    return <div className = "listUi" >
        <div className = "wholeBlock" style = {wholeBlockStyle}>
            <div className = "orangeBlock"></div>
            <div className = "blackBar"></div>
        </div>
        <div className = "greyBar" style ={greyBarStyle}></div>
    </div>
}