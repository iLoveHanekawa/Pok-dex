import React from 'react'

function BallIcon() {

    const styles = {
        height: "1.25rem",
        width: "1.25rem",
        backgroundColor: "white",
        borderRadius: "99999rem",
        position: "relative"
    }
    return (
        <div style = {styles}>
            <div style = {{
                backgroundColor: "black",
                width: "1.25rem",
                height: "0.15rem",
                position: "absolute",
                transform: "translateY(-50%)",
                top: "50%"
            }}></div>
            <div style = {{
                width: "0.75rem",
                height: "0.75rem",
                boxSizing: "border-box",
                borderRadius: "99999rem",
                backgroundColor: "white",
                position: "absolute",
                transform: "translate(-50%, -50%)",
                top: "50%",
                left: "50%",
                border: "0.15rem solid black"
            }}></div>
        </div>
    )
}

export default BallIcon