import React from "react"
import Button from "./Button"


const Header = ({showForm}) => {
    return (
        <header className="header">
            <h2> Task Manager</h2>
            <Button onClick={showForm} color={'blue'} text={'add'}/>
            
        </header>
    )
}

export default Header
