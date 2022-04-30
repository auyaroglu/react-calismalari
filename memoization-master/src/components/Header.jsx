import React from "react"

const Header = ({ number, data }) => {
    console.log("Header re-rendered")
    return (
        <div>
            Header - {number}
            <br />
            <br />
            <code>
                {JSON.stringify(data)}
            </code>
        </div>
    )
}

export default React.memo(Header);