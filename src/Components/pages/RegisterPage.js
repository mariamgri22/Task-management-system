import {useEffect} from 'react';
import RegisterUser from "../RegisterUser";

const RegisterPage = ({setPage}) => {

    useEffect(() => {
        setPage('register')
    }, [])

    return (
        <div className="d-flex j-center">
            <RegisterUser/>
        </div>
    );
};

export default RegisterPage;