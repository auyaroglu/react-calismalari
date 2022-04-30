import React from "react"

const Header2 = ({ number, increment }) => {
    console.log("Header re-rendered")
    return (
        <div>
            Header - {number}
            <br />
            <br />

            <button onClick={increment}>Click</button>
        </div>
    )
}

export default React.memo(Header2);