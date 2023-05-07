import React from "react"


export default function Navbar(){
    return(
        <div>
            <nav>
                <img  className="nav--icon" src="./logo512.png" width="40px" height="40px"></img>
                <h3 className="nav--logo">ReactFacts</h3>
                <h4 className="nav--title">React Course -project 1</h4>
            </nav>
        </div>

    )
}