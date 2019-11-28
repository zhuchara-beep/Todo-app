import React from "react"

export default function Sidebar(props) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                padding: "0px 15px"
            }}
        >
            {props.children}
        </div>
    )
}