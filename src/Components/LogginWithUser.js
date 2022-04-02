import React, {useContext, useRef} from 'react';
import {useNavigate} from "react-router-dom";
import mainContext from "../context/mainContext";

const LogginWithUser = () => {
    const nav = useNavigate()
    const {getUsers, setCurrentUser} = useContext(mainContext)

    const usernameRef = useRef()
    const pass1Ref = useRef()

    function auth() {

        if(usernameRef.current.value.length > 20 || usernameRef.current.value.length < 3) return
        if(pass1Ref.current.value.length > 20 || pass1Ref.current.value.length < 3) return;

        const user = {
            username: usernameRef.current.value,
            password: pass1Ref.current.value
        }
        const userExists = getUsers.find(x => x.username === user.username && x.password === user.password)

        if(userExists) {
            console.log(userExists)
            setCurrentUser(userExists)
            nav('/main')
        }
    }

    return (
        <div className="d-flex column form">
            <input type="text" ref={usernameRef} placeholder="username"/>
            <input type="text" ref={pass1Ref} placeholder="password one"/>
            <button onClick={auth}>Login</button>
        </div>
    );
};

export default LogginWithUser;