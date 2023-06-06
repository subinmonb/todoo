import React from "react"

const Header=({title})=>{
    return(
        <Header>
            <h1>{title}</h1>
        </Header>
    )
}
    Header.defaultProps={
        title: "To do List"
    }

    export default Header