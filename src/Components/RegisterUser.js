import {useRef, useContext} from 'react';
import {useNavigate} from "react-router-dom"
import mainContext from "../context/mainContext";

const RegisterUser = () => {
    const nav = useNavigate()
    const {getUsers, setUsers} = useContext(mainContext)

    const usernameRef = useRef()
    const pass1Ref = useRef()
    const pass2Ref = useRef()

    function auth() {

        if(usernameRef.current.value.length > 20 || usernameRef.current.value.length < 3) return
        if(pass1Ref.current.value.length > 20 || pass1Ref.current.value.length < 3) return;
        if(pass1Ref.current.value !== pass2Ref.current.value) return

        const user = {
            username: usernameRef.current.value,
            password: pass1Ref.current.value
        }
        setUsers([...getUsers, user])
        console.log(user, getUsers)
        nav('/login')
    }

    return (
        <div className="d-flex column form">
            <input type="text" ref={usernameRef} placeholder="username"/>
            <input type="text" ref={pass1Ref} placeholder="password one"/>
            <input type="text" ref={pass2Ref} placeholder="password two"/>
            <button onClick={auth}>Register User</button>
        </div>
    );
};

export default RegisterUser;