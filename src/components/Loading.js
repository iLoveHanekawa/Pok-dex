import React from 'react'

function Loading() {

    const [change, setChange] = React.useState(true)

    const style1 = {
        height: "200px",
        width: "200px",
        clipPath: 'polygon(25% 0%, 0% 50%, 50% 50%)',
        backgroundColor: "black",
        transform: "rotate(360deg)",
        transformOrigin: "center",
        transition: "all 0.3s"
    }

    const style2 = {
        ...style1,
        transform: "rotate(-360deg)",
        clipPath: 'polygon(25% 0%, 0% 50%, 50% 50%)',
        transformOrigin: "center",
        transition: "all 0.3s infinity"
    }

    const styles = change? style1: style2

    return (
        <div onClick = {() => {
            setChange(i => !i)
        }} style = {styles}>
        </div>
    )
}

export default Loading