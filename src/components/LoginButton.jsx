import React, { useContext, useState } from "react";
import { UsersContext } from "./contexts/UsersContext";


export default function LoginButton() {
    const [pressed, setPressed] = useState(false)
    const {userLoggedIn, setUserLoggedIn} = useContext(UsersContext)

    if (pressed) return <p> {userLoggedIn.username}</p>
    return (
    <button className="Login_btn" onClick={() => {setPressed((currState) => {
        return !currState
    }) }}>
        Login
    </button>
    )
}