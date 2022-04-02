import React from 'react';
import {useEffect, useContext} from "react";
import mainContext from "../context/mainContext";


const HomePage = () => {

    const {setPage} = useContext(mainContext)

    useEffect(() => {
        setPage("/")
    }, [])


    return (
        <div className="home">
            Home page
        </div>
    );
};

export default HomePage;