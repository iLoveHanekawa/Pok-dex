import React from 'react'

function Pokeball(props) {

    const [updateStyle, setUpdateStyle] = React.useState(false)

    const ballStyle = !updateStyle? {
        position: "relative"
    }: {
        position: "relative",
        transform: "translateY(-50vh)",
        opacity: "0%",
        transition: "all 0.15s ease-in"
    }

    console.log(ballStyle)

    React.useEffect(() => {
        if(updateStyle) {
            setTimeout(() => {
                props.setIsOpen(true)
            }, 150)
        }
    }, [updateStyle])

    const moveUp = () => {   
        setUpdateStyle(true)
    }

    return <div className = "pokeball" style = {ballStyle}>
        <div className = "purple"></div>
        <div className = "bigLightCircle"></div>
        <div className = "pinkCircle1"></div>
        <div className = "pinkCircle2"></div>
        <div className = "blackStrip"></div>
        <div className = "blackCircle"></div>
        <div className = "whiteCircleBig"></div>
        <div className = "whiteCircleSmall" onClick = {moveUp}></div>
        <div className = "lightCircle1"></div>
        <div className = "lightCircle2"></div>
    </div>
}

export default Pokeball
